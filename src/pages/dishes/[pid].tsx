import { useRouter } from 'next/router';
import * as React from 'react';
import { useGetDishQuery, useUpdateDishMutation } from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { New } from '../../common/types';
import { DishEditForm } from '../../modules/dishes';
import { Dish } from '../../common/types/dish.model';

export default function EditNew() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetDishQuery,
    rtkProps: { params: { companyId: 1 }, id },
  });

  const transform = (values: any) => {
    const { imageUrl, startDate, endDate } = values;

    const request = {
      ...values,
      companyId: '1',
      imageUrl: imageUrl[0]?.file,
    };

    return request;
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
          resourceType="Dish"
          rtkHook={useUpdateDishMutation}
          transform={transform}
          renderForm={(props) => <DishEditForm {...props} />}
          Resource={Dish}
          fixedCacheKey="shared-edit-dish"
          baseUrl="/dishes"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditNew.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
