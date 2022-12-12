import styled from '@emotion/styled';
import { Button, Container, Icon } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';
import { lightTheme } from '../../../styles/design-system/theme';
import { useGetCategoriesByCompanyIdQuery } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { ListBase, ListToolbar } from '../../common/resources';
import { categorySlice } from '../../store';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function Categories() {
  const columns = [
    { title: 'NUMERO', dataIndex: 'number' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className='flex'>
          <Link href={`/categories/${id}`}>
            <Button variant='secondary' bordered shadow='none'>
              <Icon name='preview' color={lightTheme.primary.mediumPurple} />
            </Button>
          </Link>
          <Button variant='danger'>
            <Icon name='brain' color={lightTheme.neutral[800]} />
          </Button>
        </Actions>
      ),
    },
  ];
  return (
    <ListBase
      columns={columns}
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
