import { useRouter } from "next/router";
import * as React from "react";
import { useGetNewByIdQuery, useUpdateNewMutation } from "../../api";
import { EasyLoader } from "../../common/components/EasyLoader";
import { useEditController } from "../../common/hooks";
import { LayoutWrapper } from "../../common/layouts";
import { EditBase } from "../../common/resources";
import { New } from "../../common/types";
import { NewEditForm } from "../../modules/news";

export default function EditNew() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetNewByIdQuery,
    id,
  });

  const transform = (values: any) => {
    return {
      ...values,
      iconId: values.iconId.value,
    };
  };

  const transformOnGet = (values: any) => new New(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
          })}
          resourceType="New"
          rtkHook={useUpdateNewMutation}
          transform={transform}
          renderForm={(props) => <NewEditForm {...props} />}
          Resource={New}
          fixedCacheKey="shared-edit-new"
          baseUrl="/news"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditNew.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
