import * as React from 'react';
import { useAddComboMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { ComboCreateForm } from '../../modules/combos/ComboCreateForm';
import { Combo } from '../../common/types';

export default function AddCombo() {
  const transformBeforeCreate = (values: any) => {
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
      resourceType="Combo"
      rtkHook={useAddComboMutation}
      transform={transformBeforeCreate}
      renderForm={(props) => <ComboCreateForm {...props} />}
      Resource={Combo}
      fixedCacheKey="shared-add-combo"
      baseUrl="/combos"
    ></CreateBase>
  );
}

AddCombo.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
