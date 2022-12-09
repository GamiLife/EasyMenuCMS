import styled from '@emotion/styled';
import {
  Button,
  Container,
  Form,
  Input,
  Password,
  Title,
  Select,
  Radio,
  Portal,
} from '@gamiui/standard';
import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { useRef } from 'react';
import { LayoutWrapper } from '../../common/layouts';

const NewCategoryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CategoryTitle = styled(Container)``;

const CategoryForm = styled(Container)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormContainer = styled(Form)`
  justify-content: flex-start;
`;

const FooterItemContainer = styled(Container)`
  max-width: 400px;
  width: 30%;
`;

const FormFooter = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export default function NewCategory() {
  const { form } = Form.useForm();

  const handleValidate = () => {
    form.validate();
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <NewCategoryContainer
        padding='1rem'
        className={classNames('categories__new')}
      >
        <CategoryTitle padding='1rem' margin='1rem 0'>
          <Title level='h2'>Add new category that you want to have!</Title>
        </CategoryTitle>

        <CategoryForm>
          <FormContainer form={form} onSubmitForm={handleSubmit}>
            <Form.Item
              rules={[{ type: 'required', message: 'Campo requerido' }]}
              label='Titutlo'
              name='names'
            >
              <Input placeholder='Titulo' />
            </Form.Item>
            <Form.Item label='Descripcion' name='password'>
              <Input placeholder='Descripcion' />
            </Form.Item>
            <Form.Item
              rules={[{ type: 'required', message: 'Campo requerido' }]}
              label='Elige un icono para tu categoría'
              name='iconId'
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
          </FormContainer>

          <FormFooter>
            <FooterItemContainer>
              <Link href='/categories'>
                <Button width='full' variant='primary' rounded='sm' bordered>
                  Regresar
                </Button>
              </Link>
            </FooterItemContainer>

            <FooterItemContainer>
              <Button
                onClick={handleValidate}
                width='full'
                type='submit'
                variant='primary'
                rounded='sm'
              >
                Enviar
              </Button>
            </FooterItemContainer>
          </FormFooter>
        </CategoryForm>
      </NewCategoryContainer>
    </React.Fragment>
  );
}

NewCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
