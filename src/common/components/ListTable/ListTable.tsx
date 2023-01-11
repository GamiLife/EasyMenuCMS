import { Table, Container, Loader } from "@gamiui/standard";
import { ICell } from "@gamiui/standard/lib/types/designSystem/molecules/Table/Cell";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import React from "react";
import { useDispatch } from "react-redux";
import { lightTheme } from "../../../../styles/design-system/theme";
import { useSliceActions, useSliceSelector } from "../../../context";
import { ResourceBase } from "../../types";
import * as S from "./styles";

export interface IListTable {
  rtkHook: UseQuery<any>;
  columns: ICell["columns"];
  Resource: new (...args: any[]) => ResourceBase;
}

export const ListTable = ({ rtkHook, columns, Resource }: IListTable) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, search } = useSliceSelector();
  const { updateCurrentPage } = useSliceActions();

  const handleChangePage = (newPage: number) =>
    dispatch(updateCurrentPage(newPage + 1));

  const { isFetching, data: response } = rtkHook({
    params: {
      sizeByPage: itemsPerPage,
      page: currentPage,
      search,
    },
    id: "1",
  });

  const totalPages = (response as any)?.metaData?.pagination.totalPages ?? 0;
  const data = (response as any)?.data;

  const makeTableItems = () =>
    data?.map((item: any) => {
      const tableItem = new Resource(item).buildTableCols();
      return tableItem;
    });
  const tableItems = makeTableItems() ?? [];

  return (
    <Container>
      <Table>
        <Table.Header columns={columns}>
          {(column) => <Table.Column as="th">{column.title}</Table.Column>}
        </Table.Header>

        <S.LoaderListTable
          as="tbody"
          minHeight="200px"
          behavior="none"
          loaderNode={
            <tr>
              <td colSpan={columns.length}>
                <Loader
                  type="spinner"
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
        </S.LoaderListTable>

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
