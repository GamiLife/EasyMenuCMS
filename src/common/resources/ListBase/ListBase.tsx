import { Container } from '@gamiui/standard';
import { Slice } from '@reduxjs/toolkit';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import classNames from 'classnames';
import React from 'react';
import { ListTable } from '../../components/ListTable';
import { withSlice } from '../../hocs';

export interface IListBase {
  listToolbar: React.ReactNode;
  slice: Slice;
  rtkHook: UseQuery<any>;
}

const ListBasePure = ({ listToolbar, rtkHook }: IListBase) => {
  return (
    <React.Fragment>
      <Container padding='1rem' className={classNames('listbase')}>
        {listToolbar}

        <Container>
          <ListTable rtkHook={rtkHook} />
        </Container>
      </Container>
    </React.Fragment>
  );
};

export const ListBase = withSlice(ListBasePure);
