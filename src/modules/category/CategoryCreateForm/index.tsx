import {
  Button,
  Form,
  Input,
  Link,
  Select,
  TextArea,
  Image,
} from '@gamiui/standard';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';

export type ICategoryCreateForm = {} & ICreateRenderForm;

export const CategoryCreateForm = ({
  handleSubmit,
  handleValidate,
  form,
}: ICategoryCreateForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <S.FormContainer form={form} onSubmitForm={handleSubmit}>
          <Form.Item
            rules={[{ type: 'required', message: 'Campo requerido' }]}
            label='Titutlo'
            name='title'
          >
            <Input placeholder='Titulo' />
          </Form.Item>
          <Form.Item label='Descripcion' name='description'>
            <TextArea placeholder='Descripcion' />
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
        <Image
          maxWidth='400px'
          alt='form_image'
          src='https://i.imgur.com/e226gZx.png'
        />
      </S.FormContent>

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
    </S.BaseForm>
  );
};
