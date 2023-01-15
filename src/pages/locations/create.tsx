import * as React from 'react';
import { useAddLocationMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { Location } from '../../common/types/location.model';
import { LocationCreateForm } from '../../modules/locations';

export default function AddLocation() {
  const transform = (values: any) => {
    const request = {
      ...values,
      companyId: '1',
    };

    return request;
  };

  return (
    <CreateBase
      resourceType="Location"
      rtkHook={useAddLocationMutation}
      transform={transform}
      renderForm={(props) => <LocationCreateForm {...props} />}
      Resource={Location}
      fixedCacheKey="shared-add-location"
      baseUrl="/locations"
    ></CreateBase>
  );
}

AddLocation.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
