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

export type INewForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const NewForm = ({ form, handleSubmit }: INewForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Titutlo"
        name="title"
      >
        <Input placeholder="Titulo" width="full" />
      </Form.Item>
      <Form.Item label="Descripcion" name="description">
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Fecha Inicio"
        name="startDate"
      >
        <DatePicker formatter="dd/MM/yyyy" />
      </Form.Item>
      <Form.Item
        rules={[
          { type: 'required', message: 'Campo requerido' },
          {
            type: 'custom',
            message: 'Fecha inicio es mayor que la fin',
            fn: (value, formValues) => {
              const { startDate } = formValues;
              const dateStart = new Date(startDate);
              const dateEnd = new Date(value);

              const isGreaterThanDateEnd = dateStart > dateEnd;

              return !isGreaterThanDateEnd;
            },
          },
        ]}
        label="Fecha Fin"
        name="endDate"
      >
        <DatePicker formatter="dd/MM/yyyy" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Background"
        name="backgroundColor"
      >
        <ColorPicker />
      </Form.Item>
      <Form.Item
        rules={[
          { type: 'required', message: 'Campo requerido' },
          {
            type: 'minLength',
            message: 'Debes cargar minimo 1 imagen',
            value: 1,
          },
          {
            type: 'maxLength',
            message: 'El limite de imagenes es de 5',
            value: 5,
          },
        ]}
        label="Imagenes para cargar"
        name="imageUrl"
      >
        <File withPreview isMultiple={false} />
      </Form.Item>
    </S.FormContainer>
  );
};
