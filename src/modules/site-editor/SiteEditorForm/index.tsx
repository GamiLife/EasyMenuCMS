import { Button, ColorPicker, Form, Title } from '@gamiui/standard';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../../../../styles/common/resource-form';
import { siteEditorSlice } from '../../../store';
import { RootState } from '../../../store/store';
import * as OwnS from '../styles';

export interface ISiteEditForm {
  frameRef: any;
}

export const SiteEditorForm = ({ frameRef }: ISiteEditForm) => {
  const { blocks, blockIdSelected } = useSelector(
    (state: RootState) => state.siteEditor
  );
  const dispatch = useDispatch();
  const blockSelected = blocks.find(
    ({ blockId }) => blockIdSelected === blockId
  );
  const base = 'http://localhost:3002';

  const { form } = Form.useForm({
    defaultValue: {
      background: blockSelected?.background,
      color: blockSelected?.color,
    },
  });

  const handleSubmit = (colorPicked: string, backgroundPicked: string) => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'block-edit-submit',
        message: {
          blockId: blockSelected?.blockId,
          background: backgroundPicked,
          color: colorPicked,
        },
      },
      base
    );
  };

  const handleBackEditor = () => {
    handleRollback();
    dispatch(
      siteEditorSlice.actions.setBlockIdSelected({
        blockId: '',
      })
    );
  };

  const handleSubmitForm = (values: any) => {
    const { background, color } = values;

    if (!background || !color) return;
    handleSubmit(color, background);
    dispatch(siteEditorSlice.actions.setBlockIdSelected({ blockId: '' }));
  };

  const handleChangeBackground = (colorPicked: string) => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'block-edit',
        message: {
          blockId: blockSelected?.blockId,
          background: colorPicked,
        },
      },
      base
    );
  };

  const handleChangeColor = (colorPicked: string) => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'block-edit',
        message: {
          blockId: blockSelected?.blockId,
          color: colorPicked,
        },
      },
      base
    );
  };

  const handleRollback = () => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'block-edit-rollback',
        message: {
          blockId: blockSelected?.blockId,
        },
      },
      base
    );
  };

  return (
    <OwnS.SiteContent padding="0 1rem">
      <Title level="h4" margin="0 0 2rem 0">
        {blockIdSelected?.toUpperCase()}:
      </Title>
      <S.FormContainer
        form={form}
        style={{ padding: 0, marginTop: '15px' }}
        onSubmitForm={handleSubmitForm}
      >
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Background"
          name="background"
          onChange={handleChangeBackground}
        >
          <ColorPicker />
        </Form.Item>

        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Color"
          name="color"
          onChange={handleChangeColor}
        >
          <ColorPicker />
        </Form.Item>
      </S.FormContainer>

      <OwnS.SiteEditorFooter>
        <Button
          width="full"
          variant="primary"
          rounded="sm"
          bordered
          onClick={handleBackEditor}
        >
          Regresar
        </Button>
        <Button
          width="full"
          type="submit"
          variant="primary"
          rounded="sm"
          onClick={() => form.validate()}
        >
          Enviar
        </Button>
      </OwnS.SiteEditorFooter>
    </OwnS.SiteContent>
  );
};
