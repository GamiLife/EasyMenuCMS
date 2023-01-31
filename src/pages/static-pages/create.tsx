import * as React from 'react';
import { useAddNewMutation, useAddStaticPageMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { StaticPages } from '../../common/types';
import { StaticPageCreateForm } from '../../modules/static-pages';

export default function AddStaticPages() {
  const transform = (values: any) => {
    const request = {
      ...values,
      pageType: 'informative',
      companyId: '1',
    };

    return request;
  };

  return (
    <CreateBase
      resourceType="StaticPages"
      rtkHook={useAddStaticPageMutation}
      transform={transform}
      renderForm={(props) => <StaticPageCreateForm {...props} />}
      Resource={StaticPages}
      fixedCacheKey="shared-add-static-pages"
      baseUrl="/static-pages"
    ></CreateBase>
  );
}

AddStaticPages.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
