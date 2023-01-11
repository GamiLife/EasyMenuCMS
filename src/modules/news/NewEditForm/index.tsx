import {
  Button,
  Form,
  Input,
  Link,
  TextArea,
  Image,
  DatePicker,
  ColorPicker,
  File,
} from "@gamiui/standard";
import classnames from "classnames";
import { ICreateRenderForm } from "../../../common/resources";
import * as S from "../../../../styles/common/resource-form";

export type INewEditForm = {} & ICreateRenderForm;

export const NewEditForm = ({
  form,
  handleSubmit,
  handleValidate,
}: INewEditForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames("flex", "justify-between")}>
        <S.FormContainer form={form} onSubmitForm={handleSubmit}>
          <Form.Item
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Titutlo"
            name="title"
          >
            <Input placeholder="Titulo" width="full" />
          </Form.Item>
          <Form.Item label="Descripcion" name="description">
            <TextArea placeholder="Descripcion" />
          </Form.Item>
          <Form.Item
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Fecha Inicio"
            name="startDate"
          >
            <DatePicker formatter="dd/MM/yyyy" />
          </Form.Item>
          <Form.Item
            rules={[
              { type: "required", message: "Campo requerido" },
              {
                type: "custom",
                message: "Fecha inicio es mayor que la fin",
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
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Background"
            name="backgroundColor"
          >
            <ColorPicker />
          </Form.Item>
          <Form.Item
            rules={[
              { type: "required", message: "Campo requerido" },
              {
                type: "minLength",
                message: "Debes cargar minimo 1 imagen",
                value: 1,
              },
              {
                type: "maxLength",
                message: "El limite de imagenes es de 5",
                value: 5,
              },
            ]}
            label="Imagenes para cargar"
            name="imageUrl"
          >
            <File withPreview />
          </Form.Item>
        </S.FormContainer>
        <Image
          maxWidth="600px"
          maxHeight="500px"
          alt="form_image"
          src="https://i.imgur.com/e226gZx.png"
        />
      </S.FormContent>

      <S.FormFooter>
        <S.FooterItemContainer>
          <Link href="/news">
            <Button
              width="full"
              variant="primary"
              rounded="sm"
              bordered
              shadow="none"
            >
              Regresar
            </Button>
          </Link>
        </S.FooterItemContainer>

        <S.FooterItemContainer>
          <Button
            onClick={handleValidate}
            width="full"
            type="submit"
            variant="primary"
            rounded="sm"
          >
            Enviar
          </Button>
        </S.FooterItemContainer>
      </S.FormFooter>
    </S.BaseForm>
  );
};
