import { Container, Title } from '@gamiui/standard';
import { ICell } from '@gamiui/standard/lib/types/designSystem/molecules/Table/Cell';
import { Slice } from '@reduxjs/toolkit';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import classNames from 'classnames';
import React from 'react';
import { ListTable } from '../../components/ListTable';
import { withSlice } from '../../hocs';
import { ResourceBase } from '../../types';

export interface IListBase {
  listToolbar: React.ReactNode;
  slice: Slice;
  rtkHook: UseQuery<any>;
  columns: ICell['columns'];
  Resource: new (...args: any[]) => ResourceBase;
}

const ListBasePure = ({
  listToolbar,
  rtkHook,
  columns,
  Resource,
}: IListBase) => {
  return (
    <React.Fragment>
      <Container padding="1rem" className={classNames('listbase')}>
        {listToolbar}

        <Container>
          <ListTable rtkHook={rtkHook} columns={columns} Resource={Resource} />
        </Container>
      </Container>
    </React.Fragment>
  );
};

export const ListBase = withSlice(ListBasePure);
