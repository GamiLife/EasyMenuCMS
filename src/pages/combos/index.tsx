import styled from '@emotion/styled';
import { Button, Container, Icon, Image } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';
import { lightTheme } from '../../../styles/design-system/theme';
import { useGetCombosQuery } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { ListBase, ListToolbar } from '../../common/resources';
import { categorySlice } from '../../store';
import { Combo } from '../../common/types';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function Combos() {
  const columns = [
    { title: 'NUMERO', dataIndex: 'number' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    { title: 'MAXITEMS', dataIndex: 'maxItems' },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/combos/${id}`}>
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
      Resource={Combo}
      columns={columns}
      slice={categorySlice}
      rtkHook={useGetCombosQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/combos/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

Combos.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
