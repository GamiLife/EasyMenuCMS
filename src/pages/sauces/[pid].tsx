import * as React from 'react';
import { useRouter } from 'next/router';

import { useGetSauceByIdQuery, useUpdateSauceMutation } from '../../api';
import { useEditController } from '../../common/hooks';
import { SauceEditForm } from '../../modules/sauces';
import { LayoutWrapper } from '../../common/layouts';
import { EasyLoader } from '../../common/components/EasyLoader';
import { EditBase } from '../../common/resources';
import { Sauce } from '../../common/types';

export default function EditSauce() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetSauceByIdQuery,
    id,
  });

  const transform = (values: any) => {
    const request = {
      ...values,
      companyId: '1',
    };

    return request;
  };

  const transformOnGet = (values: any) => new Sauce(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
          })}
          resourceType="Sauce"
          rtkHook={useUpdateSauceMutation}
          transform={transform}
          renderForm={(props) => <SauceEditForm {...props} />}
          Resource={Sauce}
          fixedCacheKey="shared-edit-sauce"
          baseUrl="/sauces"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditSauce.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
