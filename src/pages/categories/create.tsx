import * as React from "react";
import { useAddCategoryMutation } from "../../api";
import { LayoutWrapper } from "../../common/layouts";
import { CreateBase } from "../../common/resources";
import { Category } from "../../common/types";
import { CategoryCreateForm } from "../../modules/category/CategoryCreateForm";

export default function AddCategory() {
  const transform = (values: any) => {
    return {
      ...values,
      companyId: 1,
      iconId: values.iconId.value,
    };
  };

  return (
    <CreateBase
      resourceType="Category"
      rtkHook={useAddCategoryMutation}
      transform={transform}
      renderForm={(props) => <CategoryCreateForm {...props} />}
      Resource={Category}
      fixedCacheKey="shared-add-category"
      baseUrl="/categories"
    ></CreateBase>
  );
}

AddCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
