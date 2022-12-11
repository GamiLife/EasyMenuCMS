import * as React from 'react';
import { useUpdateCategoryMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { Category } from '../../common/types';
import { CategoryEditForm } from '../../modules/category';

export default function EditCategory() {
  const transform = (values: any) => {
    return {
      ...values,
      iconId: values.iconId.value,
    };
  };

  return (
    <EditBase
      resourceType='Category'
      rtkHook={useUpdateCategoryMutation}
      transform={transform}
      renderForm={(props) => <CategoryEditForm {...props} />}
      Resource={Category}
      fixedCacheKey='shared-edit-category'
      baseUrl='/categories'
    ></EditBase>
  );
}

EditCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
