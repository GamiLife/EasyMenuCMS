import { Icon, Layout, Title } from '@gamiui/standard';
import * as React from 'react';
import { Header, Footer } from '..';
import * as S from './styles';

export interface ILayoutWrapper {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: ILayoutWrapper) => {
  return (
    <Layout>
      <S.LayoutHeader>
        <Header />
      </S.LayoutHeader>
      <S.Content>
        <S.BreadCrumb>
          <S.BreadCrumbItem>
            <Title level='h3' fontWeight='light'>
              Marca
            </Title>
          </S.BreadCrumbItem>
          <S.BreadCrumArrow>
            <Icon name='arrow__right' color='black' />
          </S.BreadCrumArrow>
          <S.BreadCrumbItem>
            <Icon name='notes' color='black' />
            <Title level='h3' fontWeight='medium'>
              Home
            </Title>
          </S.BreadCrumbItem>
        </S.BreadCrumb>

        <S.Body>{children}</S.Body>
      </S.Content>
    </Layout>
  );
};
