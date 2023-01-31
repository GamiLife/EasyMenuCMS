import { Form, Input } from '@gamiui/standard';
import dynamic from 'next/dynamic';
import * as S from '../../../../styles/common/resource-form';
import { ICreateRenderForm } from '../../../common/resources';

const EditorField = dynamic(
  () => import('./EditorField').then((value) => value.EditorField),
  {
    ssr: false,
  }
);

export type IStaticPagesForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const StaticPagesForm = ({ form, handleSubmit }: IStaticPagesForm) => {
  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Url"
        name="url"
      >
        <Input placeholder="Url" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Html Content"
        name="htmlContent"
      >
        <Form.FormCustomField
          type="string"
          render={({ onChangeFormItem, value }) => (
            <EditorField onChangeFormItem={onChangeFormItem} value={value} />
          )}
        />
      </Form.Item>
    </S.FormContainer>
  );
};
