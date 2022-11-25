import {
  Button,
  Container,
  Form,
  Input,
  Password,
  Number,
  Select,
  Radio,
} from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { LayoutWrapper } from '../common/layouts';

export default function Category() {
  return (
    <React.Fragment>
      <Container padding='1rem' className={classNames('home')}>
        <Form
          onSubmitForm={(values: any) => {
            console.log(values);
          }}
        >
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Nombres'
            name='names'
          >
            <Input placeholder='Ingresa tus nombres' />
          </Form.Item>
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Contraseña'
            name='password'
          >
            <Password placeholder='Ingresa tu contraseña' />
          </Form.Item>
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Celular'
            name='phone'
          >
            <Number placeholder='Ingresa tu celular' />
          </Form.Item>
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Elige un pais'
            name='country'
          >
            <Select
              placeholder='Type your option'
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          </Form.Item>
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Elige tu genero'
            name='gender'
          >
            <Radio>
              <Radio.Item isChecked value='one'>
                A
              </Radio.Item>
              <Radio.Item value='two'>B</Radio.Item>
              <Radio.Item value='three'>C</Radio.Item>
            </Radio>
          </Form.Item>
          <Form.Item name='submit'>
            <Button width='full' type='submit' variant='primary' rounded='sm'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </React.Fragment>
  );
}

Category.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
