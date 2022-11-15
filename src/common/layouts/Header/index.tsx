import {
  Avatar,
  Container,
  Icon,
  Input,
  RichText,
  Spacer,
} from '@gamiui/standard';
import * as React from 'react';
import * as S from './styles';

import classNames from 'classnames';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Header = () => {
  return (
    <S.Header
      padding='1rem'
      className={classNames('header', 'flex', 'justify-between')}
    >
      <S.HeaderLeft
        padding='1rem'
        className={classNames('header__title__wrapper', 'flex', 'items-center')}
      >
        <S.TitleBrand className={classNames('header__title')} level='h2'>
          Marca
        </S.TitleBrand>
      </S.HeaderLeft>
      <Container
        padding='1rem'
        className={classNames('header__menu', 'flex', 'justify-end')}
      >
        <Container
          padding='1rem'
          className={classNames('header__menu__item', 'flex', 'items-center')}
        >
          <Avatar src='https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png' />
          <Spacer customSize='8px' direction='right' />
          <RichText text='Hello, Peter!' />
        </Container>
        <Container
          padding='1rem'
          className={classNames('header__menu__item', 'flex', 'items-center')}
        >
          <Icon name='remind' color={lightTheme.primary.black} />
        </Container>
      </Container>
    </S.Header>
  );
};
