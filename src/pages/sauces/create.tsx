import * as React from 'react';

import { useAddSauceMutation } from '../../api';
import { SauceCreateForm } from '../../modules/sauces';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { Sauce } from '../../common/types';

export default function AddSauce() {
  const transform = (values: any) => {
    const request = {
      ...values,
      companyId: '1',
    };

    return request;
  };

  return (
    <CreateBase
      resourceType="Sauce"
      rtkHook={useAddSauceMutation}
      transform={transform}
      renderForm={(props) => <SauceCreateForm {...props} />}
      Resource={Sauce}
      fixedCacheKey="shared-add-sauce"
      baseUrl="/sauces"
    ></CreateBase>
  );
}

AddSauce.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
