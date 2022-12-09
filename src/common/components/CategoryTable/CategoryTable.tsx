import { Table } from '@gamiui/standard';
import React from 'react';
import { useGetCategoriesByCompanyIdQuery } from '../../../api';
import { Category } from '../../types';

const columns = [
  { title: 'NUMERO', dataIndex: 'number' },
  { title: 'TITULO', dataIndex: 'title' },
  { title: 'DESCRIPCION', dataIndex: 'description' },
];

export interface ICategoryTable {
  search: string;
}

export const CategoryTable = ({ search }: ICategoryTable) => {
  const [sizeByPage] = React.useState(3);
  const [page, setPage] = React.useState(1);

  const { isFetching, data: response } = useGetCategoriesByCompanyIdQuery({
    params: {
      sizeByPage,
      page,
      search,
    },
    id: '1',
  });

  if (!response) return null;
  const { data, metaData } = response;
  if (!metaData) return null;
  const {
    pagination: { totalPages },
  } = metaData;

  const makeTableItems = () =>
    data.map((item) => {
      const tableItem = new Category(item).buildTableCols();
      return tableItem;
    });
  const tableItems = makeTableItems();

  const handleChangePage = (page: number) => {
    setPage(page + 1);
  };

  return (
    <Table>
      <Table.Header columns={columns}>
        {(column) => <Table.Column as='th'>{column.title}</Table.Column>}
      </Table.Header>
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
      <Table.Footer>
        <Table.Pagination
          columns={columns.length}
          numberPages={totalPages}
          initialPage={0}
          onChangePage={handleChangePage}
        />
      </Table.Footer>
    </Table>
  );
};
