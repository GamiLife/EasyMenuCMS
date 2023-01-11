import * as React from "react";
import { useAddNewMutation } from "../../api";
import { LayoutWrapper } from "../../common/layouts";
import { CreateBase } from "../../common/resources";
import { New } from "../../common/types";
import { NewCreateForm } from "../../modules/news";

export default function AddNew() {
  const transform = (values: any) => {
    const { imageUrl, startDate, endDate } = values;

    const request = {
      ...values,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      companyId: "1",
      imageUrl: imageUrl[0]?.file,
    };

    return request;
  };

  return (
    <CreateBase
      resourceType="New"
      rtkHook={useAddNewMutation}
      transform={transform}
      renderForm={(props) => <NewCreateForm {...props} />}
      Resource={New}
      fixedCacheKey="shared-add-new"
      baseUrl="/news"
    ></CreateBase>
  );
}

AddNew.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
