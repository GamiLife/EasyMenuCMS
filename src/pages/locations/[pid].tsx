import { useRouter } from 'next/router';
import * as React from 'react';
import { useGetLocationByIdQuery, useUpdateLocationMutation } from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { Location } from '../../common/types/location.model';
import { LocationEditForm } from '../../modules/locations';

export default function EditNew() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetLocationByIdQuery,
    id,
  });

  const transform = (values: any) => {
    const request = {
      ...values,
      companyId: '1',
    };

    return request;
  };

  const transformOnGet = (values: any) => new Location(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
          })}
          resourceType="Location"
          rtkHook={useUpdateLocationMutation}
          transform={transform}
          renderForm={(props) => <LocationEditForm {...props} />}
          Resource={Location}
          fixedCacheKey="shared-edit-location"
          baseUrl="/locations"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditNew.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
