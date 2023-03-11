import styled from '@emotion/styled';
import { Button, Container, Icon, RichText } from '@gamiui/standard';
import { ListBase } from '../../../common/resources';
import { StaticPages } from '../../../common/types';
import Link from 'next/link';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useGetStaticPagesByCompanyIdQuery } from '../../../api';
import { categorySlice } from '../../../store';
import * as S from './styles';

export const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

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
export const LastActivity = () => {
  return (
    <S.LastActivity padding="1rem">
      <S.ActivityTitle>Latest Activity</S.ActivityTitle>
      <RichText text="Last Update: **53 minutes ago**" />
      <ListBase
        Resource={StaticPages}
        columns={columns}
        slice={categorySlice}
        rtkHook={useGetStaticPagesByCompanyIdQuery}
      />
    </S.LastActivity>
  );
};
