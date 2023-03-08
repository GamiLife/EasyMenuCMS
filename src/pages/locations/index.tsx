import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Container, Icon, Image } from '@gamiui/standard';

import {
  useGetLocationsByCompanyIdQuery,
  useGetNewsByCompanyIdQuery,
} from '../../api';
import { ListBase, ListToolbar } from '../../common/resources';
import { categorySlice } from '../../store';
import { LayoutWrapper } from '../../common/layouts';
import { lightTheme } from '../../../styles/design-system/theme';
import { Location } from '../../common/types';
import { New } from '../../common/types';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function Locations() {
  const columns = [
    { title: 'NOMBRE', dataIndex: 'name' },
    { title: 'DIRECCION', dataIndex: 'address' },
    { title: 'TELEFONO', dataIndex: 'phone' },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/locations/${id}`}>
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
      Resource={Location}
      columns={columns}
      slice={categorySlice}
      rtkHook={useGetLocationsByCompanyIdQuery}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/locations/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

Locations.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
