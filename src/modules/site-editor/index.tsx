import { Container, Form, ColorPicker, Button } from '@gamiui/standard';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import * as S from '../../../styles/common/resource-form';
import * as OwnS from './styles';

export const SiteEditor = () => {
  const frameRef = useRef<any>();
  const base = 'http://localhost:3002';
  const origin = 'http://localhost:3002/sea-fast-food';

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin !== base) return;
      console.log(event.data, 'test pass!');
      const { type } = event.data;
      if (!type) return;
    });

    frameRef.current.contentWindow.postMessage(
      {
        type: 'connection',
        message: 'Connection stablished',
      },
      base
    );
  }, []);

  const handleSubmitForm = (values: any) => {
    console.log('test', values);
  };

  return (
    <Container width="full">
      <OwnS.SiteTitle level="h4">TEMA:</OwnS.SiteTitle>
      <OwnS.SiteEditor width="full" className={classNames('flex')}>
        <OwnS.SiteEditorFrame ref={frameRef} src={origin} />
        <OwnS.SiteEditorMenu>
          <OwnS.SiteEditorTitle level="h3" width="full">
            EasyEditor
          </OwnS.SiteEditorTitle>

          <Container>
            <S.FormContainer
              style={{ padding: 0, marginTop: '15px' }}
              onSubmitForm={handleSubmitForm}
            >
              <Form.Item
                rules={[{ type: 'required', message: 'Campo requerido' }]}
                label="Background"
                name="background"
              >
                <ColorPicker />
              </Form.Item>
            </S.FormContainer>

            <S.FormFooter>
              <Button width="full" type="submit" variant="primary" rounded="sm">
                Enviar
              </Button>
            </S.FormFooter>
          </Container>
        </OwnS.SiteEditorMenu>
      </OwnS.SiteEditor>
    </Container>
  );
};
