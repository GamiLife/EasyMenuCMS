import { Button, Link, Image } from '@gamiui/standard';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { NewForm } from '../NewForm';

export type INewCreateForm = {} & ICreateRenderForm;

export const NewCreateForm = ({
  handleSubmit,
  handleValidate,
  form,
}: INewCreateForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <NewForm form={form} handleSubmit={handleSubmit} />
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
