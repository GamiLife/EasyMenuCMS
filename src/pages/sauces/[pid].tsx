import * as React from 'react';
import { useRouter } from 'next/router';

import { useGetSauceByIdQuery } from '../../api';
import { useEditController } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';
import { EasyLoader } from '../../common/components/EasyLoader';

export default function EditSauce() {
  const router = useRouter();
  const { pid } = router.query;
  const id = pid as string;

  const { data, isFetching } = useEditController({
    rtkHook: useGetSauceByIdQuery,
    id,
  });
  return <EasyLoader isLoading={isFetching}>{data}</EasyLoader>;
}

EditSauce.getlayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
