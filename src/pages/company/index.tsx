import * as React from 'react';
import { useSelector } from 'react-redux';
import { useGetCompanyByIdQuery, useUpdateCompanyMutation } from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { Company } from '../../common/types';
import { CompanyEditForm } from '../../modules/company';
import { RootState } from '../../store/store';

export default function Companies() {
  const { id } = useSelector((state: RootState) => state.company);
  const { data, isFetching } = useEditController({
    rtkHook: useGetCompanyByIdQuery,
    id: `${id}`,
  });

  const getOperations = (socialNetworks: any) => {
    const formsocialNetworkIds = socialNetworks.map(
      (social: any) => +social.socialNetworkId.value
    );
    const currentValueNetworkIds = data.socialNetworks.map(
      (social: any) => +social.id
    );

    const updatedSocialNetworks = socialNetworks.map((socialNetwork: any) => ({
      ...socialNetwork,
      id: +socialNetwork.id,
      socialNetworkId: +socialNetwork.socialNetworkId.value,
      operation: !currentValueNetworkIds.includes(
        +socialNetwork.socialNetworkId.value
      )
        ? 'insert'
        : 'update',
    }));

    const deletedSocialNetworks = data.socialNetworks
      .filter(
        (socialNetwork: any) =>
          !formsocialNetworkIds.includes(+socialNetwork.id)
      )
      .map((socialNetwork: any) => ({
        id: +socialNetwork?.details?.id,
        user: '',
        phone: '',
        countryCode: '',
        socialNetworkId: +socialNetwork.id,
        operation: 'delete',
      }));

    const brandSocialNetworks = [
      ...updatedSocialNetworks,
      ...deletedSocialNetworks,
    ];

    return brandSocialNetworks;
  };

  const transformOnEdit = (values: any) => {
    const brandSocialNetworks = getOperations(values.socialNetworks);

    const request = {
      id: values.id,
      name: values.name,
      description: values.description,
      slugUrl: values.slugUrl,
      brand: {
        id: values.brandId,
        metaTitle: values.metaTitle,
        metaDescription: values.metaDescription,
      },
      socialNetworks: brandSocialNetworks.map((social: any) => ({
        id: +social?.socialNetworkId,
        details: {
          countryCode: social?.countryCode,
          phone: social?.phone,
          user: social?.user,
          id: +social?.id,
          operation: social.operation,
        },
      })),
    };

    return request;
  };

  const transformOnGet = (values: any) => new Company(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={'1'}
          defaultValue={transformOnGet({
            ...data.company,
            brand: data.brand,
            theme: data.theme,
            socialNetworks: data.socialNetworks,
          })}
          resourceType="Company"
          rtkHook={useUpdateCompanyMutation}
          transform={transformOnEdit}
          renderForm={(props) => <CompanyEditForm {...props} />}
          Resource={Company}
          fixedCacheKey="shared-edit-company"
          baseUrl="/company"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

Companies.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
