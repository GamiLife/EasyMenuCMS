import styled from '@emotion/styled';
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Select,
} from '@gamiui/standard';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAddCategoryMutation } from '../../api';
import { LayoutWrapper } from '../../common/layouts';
import { Category } from '../../common/types';

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
  const companyId = 1;
  const router = useRouter();
  const [add, result] = useAddCategoryMutation({
    fixedCacheKey: 'shared-add-category',
  });
  const { form } = Form.useForm();

  const handleValidate = () => form.validate();

  const fnFormat = (values: any) => {
    return {
      ...values,
      iconId: values.iconId.value,
    };
  };

  const handleSubmit = async (values: any) => {
    try {
      const valuesFormatted = fnFormat(values);
      const request = new Category({
        ...valuesFormatted,
        companyId,
      }).buildCreateRequest();

      await add(request);

      router.push('/categories');
    } catch (error) {}
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
      </NewCategoryContainer>
    </React.Fragment>
  );
}

NewCategory.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
