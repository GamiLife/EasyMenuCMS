import { useRouter } from 'next/router';
import * as React from 'react';
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController, useFoodOptions } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { Category } from '../../common/types';
import { CategoryEditForm } from '../../modules/category';

export default function EditCategory() {
  const { foodIconsOptions } = useFoodOptions();
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetCategoryByIdQuery,
    id,
  });

  const transform = (values: any) => {
    const { imageCategory, iconId } = values;

    return {
      ...values,
      companyId: 1,
      iconId: iconId?.value,
      imageCategory: imageCategory[0]?.file,
    };
  };

  const transformOnGet = (values: any) => new Category(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
            iconOptions: foodIconsOptions,
          })}
          resourceType="Category"
          rtkHook={useUpdateCategoryMutation}
          transform={transform}
          renderForm={(props) => <CategoryEditForm {...props} />}
          Resource={Category}
          fixedCacheKey="shared-edit-category"
          baseUrl="/categories"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
