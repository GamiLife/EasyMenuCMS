import styled from '@emotion/styled';
import { Button, Container, Icon } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';
import { lightTheme } from '../../../styles/design-system/theme';
import { useGetStaticPagesByCompanyIdQuery } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { ListBase, ListToolbar } from '../../common/resources';
import { categorySlice } from '../../store';
import { StaticPages as StaticPagesModel } from '../../common/types/static-pages.model';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function StaticPages() {
  const columns = [
    { title: 'NUMERO', dataIndex: 'number' },
    { title: 'URL', dataIndex: 'url' },
    { title: 'TIPO DE PAGINA', dataIndex: 'pageType' },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/static-pages/${id}`}>
            <Button variant="secondary" bordered shadow="none">
              <Icon name="preview" color={lightTheme.primary.mediumPurple} />
            </Button>
          </Link>
          <Button variant="danger">
            <Icon name="brain" color={lightTheme.neutral[800]} />
          </Button>
        </Actions>
      ),
    },
  ];
  return (
    <ListBase
      Resource={StaticPagesModel}
      columns={columns}
      slice={categorySlice}
      rtkHook={useGetStaticPagesByCompanyIdQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/static-pages/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    />
  );
}

StaticPages.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
