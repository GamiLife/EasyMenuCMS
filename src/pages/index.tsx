import { Container } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { LayoutWrapper } from '../common/layouts';

export default function Home() {
  return (
    <React.Fragment>
      <Container padding='1rem' className={classNames('home')}></Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
