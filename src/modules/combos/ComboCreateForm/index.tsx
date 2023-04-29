import { Button, Link, Image } from '@gamiui/standard';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { ComboForm } from '../ComboForm';

export type IComboCreateForm = {} & ICreateRenderForm;

export const ComboCreateForm = ({
  handleSubmit,
  handleValidate,
  form,
}: IComboCreateForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <ComboForm form={form} handleSubmit={handleSubmit} />
        <Image
          maxWidth="400px"
          alt="form_image"
          src="https://i.imgur.com/e226gZx.png"
        />
      </S.FormContent>

      <S.FormFooter>
        <S.FooterItemContainer>
          <Link href="/combos">
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
