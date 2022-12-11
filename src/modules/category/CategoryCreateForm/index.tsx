import { Button, Form, Input, Link, Select } from '@gamiui/standard';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from './styles';

export type ICategoryCreateForm = {} & ICreateRenderForm;

export const CategoryCreateForm = ({
  handleSubmit,
  handleValidate,
  form,
}: ICategoryCreateForm) => {
  return (
    <S.CategoryForm>
      <S.FormContainer form={form} onSubmitForm={handleSubmit}>
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
      </S.FormContainer>

      <S.FormFooter>
        <S.FooterItemContainer>
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
        </S.FooterItemContainer>

        <S.FooterItemContainer>
          <Button
            onClick={handleValidate}
            width='full'
            type='submit'
            variant='primary'
            rounded='sm'
          >
            Enviar
          </Button>
        </S.FooterItemContainer>
      </S.FormFooter>
    </S.CategoryForm>
  );
};
