import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Container, Icon } from '@gamiui/standard';

import { ListBase, ListToolbar } from '../../common/resources';
import { LayoutWrapper } from '../../common/layouts';
import { categorySlice } from '../../store';
import { lightTheme } from '../../../styles/design-system/theme';
import { Sauce } from '../../common/types';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export default function Sauces() {
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    { title: 'PRECIO', dataIndex: 'price' },
    { title: 'IMAGEN', dataIndex: 'image' },
    {
      title: 'ACCIONES',
      dataindex: 'actions',
      render: (id: string) => (
        <Actions className="flex">
          <Link href={`/sauces/${id}`}>
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
      Resource={Sauce}
      columns={columns}
      slice={categorySlice}
      // rtkHook={}
      listToolbar={
        <ListToolbar
          renderActions={() => (
            <Link href="/sauces/create">
              <Button>Crear</Button>
            </Link>
          )}
        />
      }
    ></ListBase>
  );
}

Sauces.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
