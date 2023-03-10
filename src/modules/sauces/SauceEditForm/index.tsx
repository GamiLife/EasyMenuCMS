import Link from 'next/link';
import { Button, Image } from '@gamiui/standard';
import classnames from 'classnames';

import { ICreateRenderForm } from '../../../common/resources';
import { SauceForm } from '../SauceForm';
import * as S from '../../../../styles/common/resource-form';

export type ISauceEditForm = {} & ICreateRenderForm;

export const SauceEditForm = ({
  form,
  handleSubmit,
  handleValidate,
}: ISauceEditForm) => {
  return (
    <S.BaseForm>
      <S.FormContent className={classnames('flex', 'justify-between')}>
        <SauceForm form={form} handleSubmit={handleSubmit} />
        <Image
          maxWidth="600px"
          maxHeight="500px"
          alt="formimage"
          src="https://i.imgur.com/e226gZx.png"
        />
      </S.FormContent>

      <S.FormFooter>
        <S.FooterItemContainer>
          <Link href="/sauces">
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
