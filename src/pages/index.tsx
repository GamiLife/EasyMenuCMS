import { Button, Container, Icon, Input, Table } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { lightTheme } from '../../styles/design-system/theme';
import { useGetCategoriesByCompanyIdQuery } from '../api';
import { CategoryTable } from '../common/components/CategoryTable/CategoryTable';
import { LayoutWrapper } from '../common/layouts';

export default function Home() {
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
          />
          <Button>Crear Categoria</Button>
        </Container>

        <Container>
          <CategoryTable></CategoryTable>
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
