import { Button, Container, Icon, Input } from '@gamiui/standard';
import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { useCallback } from 'react';
import { lightTheme } from '../../../styles/design-system/theme';
import { CategoryTable } from '../../common/components/CategoryTable/CategoryTable';
import { useDebounce } from '../../common/hooks';
import { LayoutWrapper } from '../../common/layouts';

export default function Categories() {
  const [search, setSearch] = React.useState('');
  const debounceSearch = useDebounce({ value: search, delay: 500 });

  const onChange = (value: string) => setSearch(value);

  const optimizedFn = useCallback(onChange, []);

  return (
    <React.Fragment>
      <Container padding='1rem' className={classNames('categories')}>
        <Container
          padding='1rem'
          className={classNames(
            'categories__header',
            'flex',
            'justify-between'
          )}
        >
          <Input
            placeholder='Busca una categoria...'
            prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
            positionPrefix='right'
            value={search}
            onChangeFormItem={optimizedFn}
          />
          <Link href='/categories/new'>
            <Button>Crear Categoria</Button>
          </Link>
        </Container>

        <Container>
          <CategoryTable search={debounceSearch} />
        </Container>
      </Container>
    </React.Fragment>
  );
}

Categories.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
