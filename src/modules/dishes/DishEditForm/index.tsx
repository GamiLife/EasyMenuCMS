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
} from '@gamiui/standard';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { DishForm } from '../DishForm';

export type IDishEditForm = {} & ICreateRenderForm;

export const DishEditForm = ({
  form,
  handleSubmit,
  handleValidate,
}: IDishEditForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <DishForm form={form} handleSubmit={handleSubmit} />
        <Image
          maxWidth="600px"
          maxHeight="500px"
          alt="form_image"
          src="https://i.imgur.com/e226gZx.png"
        />
      </S.FormContent>

      <S.FormFooter>
        <S.FooterItemContainer>
          <Link href="/dishes">
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
