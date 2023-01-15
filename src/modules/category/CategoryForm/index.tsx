import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { Form, Input, Select, TextArea, File } from '@gamiui/standard';
import { useFoodOptions } from '../../../common/hooks';

export type TFoodIconOptions = {
  value: string;
  label: React.ReactNode;
}[];

export type ICategoryForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const CategoryForm = ({ form, handleSubmit }: ICategoryForm) => {
  const { foodIconsOptions } = useFoodOptions();

  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Titutlo"
        name="title"
      >
        <Input placeholder="Titulo" />
      </Form.Item>
      <Form.Item label="Descripcion" name="description">
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            type: 'custom',
            fn: (value: any, formValues: any) => {
              if (!value && !formValues['imageCategory']?.length) {
                return false;
              }
              return true;
            },
            message: 'Debes seleccionar un icono o una imagen',
          },
        ]}
        label="Elige un icono para tu categoría"
        name="iconId"
      >
        <Select
          isClearable
          placeholder="Type your option"
          options={foodIconsOptions}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            type: 'custom',
            fn: (value: any, formValues: any) => {
              if (!value?.length && !formValues['iconId']) {
                return false;
              }
              return true;
            },
            message: 'Debes seleccionar una imagen o un icono',
          },
        ]}
        label="En caso no cargues un icono puede cargar una imagen"
        name="imageCategory"
      >
        <File withPreview isMultiple={false} />
      </Form.Item>
    </S.FormContainer>
  );
};
