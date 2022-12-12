import { useRouter } from 'next/router';
import * as React from 'react';
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../api';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { Category } from '../../common/types';
import { CategoryEditForm } from '../../modules/category';

export default function EditCategory() {
  const iconOptions = [
    {
      label: 'Bebidas',
      value: 'bebidas',
    },
    {
      value: 'seafood',
      label: 'Comida Marina',
    },
    {
      label: 'Pastas',
      value: 'pastfood',
    },
  ];
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetCategoryByIdQuery,
    id,
  });

  if (isFetching) return null;
  if (!data) return null;

  const transform = (values: any) => {
    return {
      ...values,
      iconId: values.iconId.value,
    };
  };

  const transformOnGet = (values: any) => new Category(values).buildGet();

  return (
    <EditBase
      resourceId={id}
      defaultValue={transformOnGet({
        ...data,
        iconOptions,
      })}
      resourceType='Category'
      rtkHook={useUpdateCategoryMutation}
      transform={transform}
      renderForm={(props) => (
        <CategoryEditForm {...props} iconOptions={iconOptions} />
      )}
      Resource={Category}
      fixedCacheKey='shared-edit-category'
      baseUrl='/categories'
    ></EditBase>
  );
}

EditCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
