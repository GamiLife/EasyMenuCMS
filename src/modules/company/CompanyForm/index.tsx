import { Container, Form, Input, TextArea } from '@gamiui/standard';
import * as S from '../../../../styles/common/resource-form';
import { ICreateRenderForm } from '../../../common/resources';
import { SiteEditor } from '../../site-editor';
import * as OwnS from './styles';

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
        label="Slug"
        name="slugUrl"
      >
        <Input placeholder="Slug" width="full" />
      </Form.Item>
      <Container width="full">
        <OwnS.BrandTitle level="h4">MARCA:</OwnS.BrandTitle>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Meta Title"
          name="metaTitle"
        >
          <Input placeholder="Meta Title" width="full" />
        </Form.Item>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Meta Description"
          name="metaDescription"
        >
          <Input placeholder="Meta Description" width="full" />
        </Form.Item>
      </Container>
    </S.FormContainer>
  );
};
