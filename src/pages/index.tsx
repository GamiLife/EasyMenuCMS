import { Button, Container, Icon, Input } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { useCallback } from 'react';
import { lightTheme } from '../../styles/design-system/theme';
import { CategoryTable } from '../common/components/CategoryTable/CategoryTable';
import { useDebounce } from '../common/hooks';
import { LayoutWrapper } from '../common/layouts';

export default function Home() {
  const [search, setSearch] = React.useState('');
  const debounceSearch = useDebounce({ value: search, delay: 500 });

  const onChange = (value: string) => setSearch(value);

  const optimizedFn = useCallback(onChange, []);

  return (
    <React.Fragment>
      <Container padding='1rem' className={classNames('home')}>
        <Container
          padding='1rem'
          className={classNames('home__header', 'flex', 'justify-between')}
        >
          <Input
            placeholder='Busca una categoria...'
            prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
            positionPrefix='right'
            value={search}
            onChangeFormItem={optimizedFn}
          />
          <Button>Crear Categoria</Button>
        </Container>

        <Container>
          <CategoryTable search={debounceSearch} />
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
