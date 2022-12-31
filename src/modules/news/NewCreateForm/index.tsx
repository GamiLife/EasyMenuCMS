import {
  Button,
  Form,
  Input,
  Link,
  File,
  TextArea,
  Image,
  ColorPicker,
  DatePicker,
} from "@gamiui/standard";
import classnames from "classnames";
import { ICreateRenderForm } from "../../../common/resources";
import * as S from "../../../../styles/common/resource-form";

export type INewCreateForm = {} & ICreateRenderForm;

export const NewCreateForm = ({
  handleSubmit,
  handleValidate,
  form,
}: INewCreateForm) => {
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
            <DatePicker />
          </Form.Item>
          <Form.Item
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Fecha Fin"
            name="endDate"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Background"
            name="backgroundColor"
          >
            <ColorPicker />
          </Form.Item>
          <Form.Item
            rules={[{ type: "required", message: "Campo requerido" }]}
            label="Imagenes para cargar"
            name="filelist"
          >
            <File />
          </Form.Item>
        </S.FormContainer>
        <Image
          maxWidth="400px"
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
