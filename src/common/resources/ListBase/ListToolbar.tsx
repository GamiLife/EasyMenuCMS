import styled from '@emotion/styled';
import { Container, Input, Icon, Title } from '@gamiui/standard';
import classNames from 'classnames';

import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useSliceActions } from '../../../context';
import { useDebounce } from '../../hooks';

export interface IListToolbar {
  renderActions: () => React.ReactNode;
}

const HeaderBase = styled(Container)`
  gap: 2rem;
`;

const SearchInput = styled(Input)`
  padding-top: 0;
`;

export const ListToolbar = ({ renderActions }: IListToolbar) => {
  const [search, setSearch] = React.useState('');

  const actions = useSliceActions();

  const dispatch = useDispatch();
  const { updateSearch } = actions;
  const debounceSearch = useDebounce({ value: search, delay: 500 });

  const onChange = (value: string) => setSearch(value);

  const optimizedFn = useCallback(onChange, []);

  useEffect(() => {
    dispatch(updateSearch(debounceSearch));
  }, [debounceSearch]);

  return (
    <Container
      padding='1rem'
      className={classNames('list__toolbar', 'flex', 'justify-between')}
    >
      <HeaderBase
        className={classNames('flex', 'justify-center', 'items-center')}
      >
        <Title>Categoria</Title>
      </HeaderBase>

      <HeaderBase
        className={classNames('flex', 'justify-center', 'items-center')}
      >
        <SearchInput
          width='lg'
          placeholder='Busca lo que desees...'
          prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
          positionPrefix='right'
          value={search}
          onChangeFormItem={optimizedFn}
        />
        {renderActions()}
      </HeaderBase>
    </Container>
  );
};
