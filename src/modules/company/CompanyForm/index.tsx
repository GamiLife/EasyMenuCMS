import { Form, Input, TextArea } from '@gamiui/standard';
import * as S from '../../../../styles/common/resource-form';
import { ICreateRenderForm } from '../../../common/resources';

export type ICompanyForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const CompanyForm = ({ form, handleSubmit }: ICompanyForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Nombre"
        name="name"
      >
        <Input placeholder="Nombre de la empresa" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Descripcion"
        name="description"
      >
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="slug"
        name="slugUrl"
      >
        <Input placeholder="slug" width="full" />
      </Form.Item>
    </S.FormContainer>
  );
};
