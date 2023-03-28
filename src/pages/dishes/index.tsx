import styled from '@emotion/styled';
import { Button, Container, Icon, Image } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';
import { lightTheme } from '../../../styles/design-system/theme';
import { useGetDishesQuery, useGetNewsByCompanyIdQuery } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { ListBase, ListToolbar } from '../../common/resources';
import { New } from '../../common/types';
import { Dish } from '../../common/types/dish.model';
import { categorySlice } from '../../store';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function Dishes() {
  const columns = [
    { title: 'NUMERO', dataIndex: 'number' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    { title: 'SLUG', dataIndex: 'slug' },
    { title: 'PRICE', dataIndex: 'priceByUnit' },
    { title: 'MAXITEMS', dataIndex: 'maxItems' },
    {
      title: 'IMAGEN',
      dataIndex: 'imageUrl',
      render: (imageUrl: string) => (
        <Image
          src={imageUrl}
          alt=""
          maxWidth="200px"
          minHeight="20px"
          width="100%"
        />
      ),
    },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/dishes/${id}`}>
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
      Resource={Dish}
      columns={columns}
      slice={categorySlice}
      rtkHook={useGetDishesQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/dishes/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

Dishes.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
