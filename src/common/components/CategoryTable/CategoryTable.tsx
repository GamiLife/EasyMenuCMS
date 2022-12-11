import styled from '@emotion/styled';
import { Table, Container, Loader, Button, Icon } from '@gamiui/standard';
import React, { Fragment } from 'react';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useGetCategoriesByCompanyIdQuery } from '../../../api';
import { Category } from '../../types';

const LoaderCategoryTable = styled(Loader.Wrapper)`
  height: 291px;
`;

const Actions = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export interface ICategoryTable {
  search: string;
}

export const CategoryTable = ({ search }: ICategoryTable) => {
  const [sizeByPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const { isFetching, data: response } = useGetCategoriesByCompanyIdQuery({
    params: {
      sizeByPage,
      page,
      search,
    },
    id: '1',
  });

  const columns = [
    { title: 'NUMERO', dataIndex: 'number' },
    { title: 'TITULO', dataIndex: 'title' },
    { title: 'DESCRIPCION', dataIndex: 'description' },
    {
      title: 'ACCIONES',
      dataIndex: 'actions',
      render: (id: string) => (
        <Actions className='flex'>
          <Button variant='secondary' bordered shadow='none'>
            <Icon name='preview' color={lightTheme.primary.mediumPurple} />
          </Button>
          <Button variant='danger'>
            <Icon name='brain' color={lightTheme.neutral[800]} />
          </Button>
        </Actions>
      ),
    },
  ];

  const totalPages = response?.metaData?.pagination.totalPages ?? 0;
  const data = response?.data;

  const makeTableItems = () =>
    data?.map((item) => {
      const tableItem = new Category(item).buildTableCols();
      return tableItem;
    });
  const tableItems = makeTableItems() ?? [];

  const handleChangePage = (page: number) => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Table>
        <Table.Header columns={columns}>
          {(column) => <Table.Column as='th'>{column.title}</Table.Column>}
        </Table.Header>

        <LoaderCategoryTable
          as='tbody'
          minHeight='200px'
          behavior='none'
          loaderNode={
            <tr>
              <td colSpan={4}>
                <Loader
                  type='spinner'
                  background={lightTheme.primary.mediumPurple}
                />
              </td>
            </tr>
          }
          isLoading={isFetching}
        >
          <Table.Body items={tableItems}>
            {(item, index) => (
              <Table.Row item={item} key={index}>
                {([cellKey, cellValue], index) => (
                  <Table.Cell
                    key={index}
                    cellKey={cellKey}
                    cellValue={`${cellValue}`}
                    columns={columns}
                  />
                )}
              </Table.Row>
            )}
          </Table.Body>
        </LoaderCategoryTable>

        {totalPages > 0 && (
          <Table.Footer>
            <Table.Pagination
              columns={columns.length}
              numberPages={totalPages}
              initialPage={0}
              onChangePage={handleChangePage}
            />
          </Table.Footer>
        )}
      </Table>
    </Container>
  );
};
