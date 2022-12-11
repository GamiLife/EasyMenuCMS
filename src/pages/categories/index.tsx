import { Button } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';
import { useGetCategoriesByCompanyIdQuery } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { ListBase, ListToolbar } from '../../common/resources';
import { categorySlice } from '../../store';

export default function Categories() {
  return (
    <ListBase
      slice={categorySlice}
      rtkHook={useGetCategoriesByCompanyIdQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href='/categories/create'>
              <Button>Crear Categoria</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

Categories.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
