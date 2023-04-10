import * as React from 'react';
import { useAddDishMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { DishCreateForm } from '../../modules/dishes';
import { Dish } from '../../common/types/dish.model';

export default function AddDish() {
  const transform = (values: any) => {
    const { imageUrl } = values;

    const request = {
      ...values,
      companyId: '1',
      imageUrl: imageUrl[0]?.file,
    };

    return request;
  };

  return (
    <CreateBase
      resourceType="Dish"
      rtkHook={useAddDishMutation}
      transform={transform}
      renderForm={(props) => <DishCreateForm {...props} />}
      Resource={Dish}
      fixedCacheKey="shared-add-dish"
      baseUrl="/dishes"
    ></CreateBase>
  );
}

AddDish.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
