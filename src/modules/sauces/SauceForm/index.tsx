import { Form, Input, TextArea, File } from '@gamiui/standard';

import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';

export type ISauceForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const SauceForm = ({ form, handleSubmit }: ISauceForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Título"
        name="title"
      >
        <Input placeholder="Título" width="full" />
      </Form.Item>
      <Form.Item label="Descripción" name="description">
        <TextArea placeholder="Descripción" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Precio"
        name="price"
      >
        <Input placeholder="Precio" type="number" width="full" />
      </Form.Item>
      <Form.Item
        rules={[
          { type: 'required', message: 'Campo requerido' },
          {
            type: 'minLength',
            message: 'Debes cargar mínimo 1 imagen',
            value: 1,
          },
          {
            type: 'maxLength',
            message: 'El límite de imágenes es de 5',
            value: 5,
          },
        ]}
        label="Imágenes para cargar"
        name="imageUrl"
      >
        <File withPreview isMultiple={false} />
      </Form.Item>
    </S.FormContainer>
  );
};
