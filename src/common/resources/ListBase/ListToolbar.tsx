import { Container, Input, Icon } from '@gamiui/standard';
import classNames from 'classnames';

import React, { useCallback, useEffect } from 'react';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useSliceActions } from '../../../context';
import { useDebounce } from '../../hooks';

export interface IListToolbar {
  renderActions: () => React.ReactNode;
}

export const ListToolbar = ({ renderActions }: IListToolbar) => {
  const [search, setSearch] = React.useState('');

  const { updateSearch } = useSliceActions();
  const debounceSearch = useDebounce({ value: search, delay: 500 });

  const onChange = (value: string) => setSearch(value);

  const optimizedFn = useCallback(onChange, []);

  useEffect(() => {
    updateSearch(debounceSearch);
  }, [debounceSearch]);

  return (
    <Container
      padding='1rem'
      className={classNames('list__toolbar', 'flex', 'justify-between')}
    >
      <Input
        placeholder='Busca el item(s) que desees...'
        prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
        positionPrefix='right'
        value={search}
        onChangeFormItem={optimizedFn}
      />

      <Container>{renderActions()}</Container>
    </Container>
  );
};
