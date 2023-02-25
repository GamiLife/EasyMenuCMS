import { Button, Link, Image } from '@gamiui/standard';
import classnames from 'classnames';
import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { CompanyForm } from '../CompanyForm';

export type ICompanyEditForm = {} & ICreateRenderForm;

export const CompanyEditForm = ({
  form,
  handleSubmit,
  handleValidate,
}: ICompanyEditForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <CompanyForm form={form} handleSubmit={handleSubmit} />
      </S.FormContent>

      <S.FormFooter>
        <S.FooterItemContainer>
          <Link href="/locations">
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
