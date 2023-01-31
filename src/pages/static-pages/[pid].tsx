import { useRouter } from 'next/router';
import * as React from 'react';
import {
  useGetStaticPagesByIdQuery,
  useUpdateStaticPageMutation,
} from '../../api';
import { EasyLoader } from '../../common/components/EasyLoader';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EditBase } from '../../common/resources';
import { New, StaticPages } from '../../common/types';
import { StaticPageEditForm } from '../../modules/static-pages';

export default function EditStaticPage() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetStaticPagesByIdQuery,
    id,
  });

  const transform = (values: any) => {
    const request = {
      ...values,
      pageType: 'informative',
      companyId: '1',
    };

    return request;
  };

  const transformOnGet = (values: any) => new StaticPages(values).buildGet();

  return (
    <EasyLoader isLoading={isFetching}>
      {data && (
        <EditBase
          resourceId={id}
          defaultValue={transformOnGet({
            ...data,
          })}
          resourceType="StaticPages"
          rtkHook={useUpdateStaticPageMutation}
          transform={transform}
          renderForm={(props) => <StaticPageEditForm {...props} />}
          Resource={StaticPages}
          fixedCacheKey="shared-edit-static-pages"
          baseUrl="/static-pages"
        ></EditBase>
      )}
    </EasyLoader>
  );
}

EditStaticPage.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
