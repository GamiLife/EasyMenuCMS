import * as React from 'react';
import styled from '@emotion/styled';
import { Button, Container, Form, Input, Link, Select } from '@gamiui/standard';
import { useAddCategoryMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { CreateBase } from '../../common/resources';
import { Category } from '../../common/types';

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
  const transform = (values: any) => {
    return {
      ...values,
      iconId: values.iconId.value,
    };
  };

  return (
    <CreateBase
      resourceType='Category'
      rtkHook={useAddCategoryMutation}
      transform={transform}
      renderForm={({ handleSubmit, handleValidate, form }) => (
        <CategoryForm>
          <FormContainer form={form} onSubmitForm={handleSubmit}>
            <Form.Item
              rules={[{ type: 'required', message: 'Campo requerido' }]}
              label='Titutlo'
              name='title'
            >
              <Input placeholder='Titulo' />
            </Form.Item>
            <Form.Item label='Descripcion' name='description'>
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
                <Button
                  width='full'
                  variant='primary'
                  rounded='sm'
                  bordered
                  shadow='none'
                >
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
      )}
      Resource={Category}
      fixedCacheKey='shared-add-category'
      baseUrl='/categories'
    ></CreateBase>
  );
}

NewCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
