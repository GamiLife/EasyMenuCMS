import {
  Form,
  Input,
  TextArea,
  DatePicker,
  ColorPicker,
  File,
} from '@gamiui/standard';
import * as S from '../../../../styles/common/resource-form';
import { ICreateRenderForm } from '../../../common/resources';

export type ILocationForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const LocationForm = ({ form, handleSubmit }: ILocationForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Nombre"
        name="name"
      >
        <Input placeholder="Nombre del local" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Direccion"
        name="address"
      >
        <TextArea placeholder="Direccion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Telefono"
        name="phone"
      >
        <Input placeholder="Telefono" width="full" />
      </Form.Item>
    </S.FormContainer>
  );
};
