import {
  Button,
  Form,
  Input,
  Link,
  Select,
  TextArea,
  Image,
} from '@gamiui/standard';
import { ISelect } from '@gamiui/standard/lib/types/designSystem/atoms/Select/Select';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from './styles';

export type ICategoryEditForm = {
  iconOptions: ISelect['options'];
} & ICreateRenderForm;

export const CategoryEditForm = ({
  iconOptions,
  form,
  handleSubmit,
  handleValidate,
}: ICategoryEditForm) => {
  return (
    <S.CategoryForm>
      <S.CategoryContent className={classnames('flex', 'justify-between')}>
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
            <Select placeholder='Type your option' options={iconOptions} />
          </Form.Item>
        </S.FormContainer>
        <Image
          maxWidth='600px'
          alt='form_image'
          src='https://i.imgur.com/e226gZx.png'
        />
      </S.CategoryContent>

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
