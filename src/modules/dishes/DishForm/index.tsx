import {
  Form,
  Input,
  TextArea,
  DatePicker,
  ColorPicker,
  File,
  Number,
} from '@gamiui/standard';

import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';

export type IDishForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const DishForm = ({ form, handleSubmit }: IDishForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Título"
        name="title"
      >
        <Input placeholder="Titulo" width="full" />
      </Form.Item>
      <Form.Item label="Descripcion" name="description">
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Slug"
        name="slug"
      >
        <Input placeholder="Slug" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Precio"
        name="priceByUnit"
      >
        <Number placeholder="Precio" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Maximo Items"
        name="maxItems"
      >
        <Number placeholder="Maximo Items" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Imagen del producto para cargar"
        name="imageUrl"
      >
        <File withPreview isMultiple={false} />
      </Form.Item>
    </S.FormContainer>
  );
};
