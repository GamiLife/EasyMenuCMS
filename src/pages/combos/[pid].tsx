import { useRouter } from 'next/router';
import * as React from 'react';
import {
  useGetComboQuery,
  useGetDishQuery,
  useUpdateComboMutation,
  useUpdateDishMutation,
} from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { DishEditForm } from '../../modules/dishes';
import { Dish } from '../../common/types/dish.model';
import { Combo } from '../../common/types';
import { ComboEditForm } from '../../modules/combos/ComboEditForm';

export default function EditCombo() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetComboQuery,
    rtkProps: { params: { companyId: 1 }, id },
  });

  const transformBeforeEdit = (values: any) => {
    const { imageUrl, startDate, endDate } = values;

    const request = {
      ...values,
      companyId: '1',
      imageUrl: imageUrl[0]?.file,
    };

    return request;
  };

  const transformOnGet = (values: any) => new Combo(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
          })}
          resourceType="Combo"
          rtkHook={useUpdateComboMutation}
          transform={transformBeforeEdit}
          renderForm={(props) => <ComboEditForm {...props} />}
          Resource={Combo}
          fixedCacheKey="shared-edit-combo"
          baseUrl="/combos"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditCombo.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
