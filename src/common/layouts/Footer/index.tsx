import { Container, Button, Icon } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';

export const Footer = () => {
  return (
    <Container
      height='full'
      padding='1rem'
      className={classNames('footer', 'flex', 'justify-center', 'items-center')}
    >
      <Button rounded='lg' preffix={<Icon name='bullet' color='white' />}>
        Crear Tópico
      </Button>
    </Container>
  );
};
