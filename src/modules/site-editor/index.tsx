import { Container, Form, ColorPicker, Button, Icon } from '@gamiui/standard';
import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../../../styles/common/resource-form';
import { lightTheme } from '../../../styles/design-system/theme';
import { ISiteEditorState, siteEditorSlice } from '../../store';
import { RootState } from '../../store/store';
import * as OwnS from './styles';

type TSiteEditorState = 'blocks' | 'editor';

export const SiteEditor = () => {
  const [siteEditorState, setSiteEditorState] =
    useState<TSiteEditorState>('blocks');

  const { blocks, blockIdSelected, toolbarAction } = useSelector(
    (state: RootState) => state.siteEditor
  );

  const blockSelected = blocks.find(
    ({ blockId }) => blockIdSelected === blockId
  );
  const dispatch = useDispatch();

  const frameRef = useRef<any>();
  const base = 'http://localhost:3002';
  const origin = 'http://localhost:3002/sea-fast-food';

  const handleBlockIdSelected = (blockIdSelected: string) => {
    dispatch(
      siteEditorSlice.actions.setBlockIdSelected({
        blockId: blockIdSelected,
      })
    );
  };

  useEffect(() => {
    if (!blockIdSelected) return setSiteEditorState('blocks');
    setSiteEditorState('editor');
  }, [blockIdSelected]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin !== base) return;
      const { type, message } = event.data;

      if (!type) return;
      if (type === 'block-selection' && message) {
        const { blockId } = message;
        handleBlockIdSelected(blockId);
        return;
      }
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

  const pickToolbacAction = (
    toolbarActionProp: ISiteEditorState['toolbarAction']
  ) => {
    if (toolbarAction === toolbarActionProp) {
      return '';
    }
    return toolbarActionProp;
  };

  const handlePickToolbarAction = (
    toolbarActionProp: ISiteEditorState['toolbarAction']
  ) => {
    const picked = pickToolbacAction(toolbarActionProp);
    frameRef.current.contentWindow.postMessage(
      {
        type: 'enable-hover',
        message: picked === 'cursor-selected',
      },
      base
    );
    dispatch(siteEditorSlice.actions.setToolbarAction(picked));
  };

  return (
    <Container width="full" padding="1rem">
      <OwnS.SiteEditorToolbar
        className={classNames('flex', 'justify-between', 'items-center')}
      >
        <OwnS.SiteTitle level="h2">Site Editor:</OwnS.SiteTitle>
        <OwnS.Toolbar>
          <OwnS.ToolbarItem
            onClick={() => handlePickToolbarAction('cursor-selected')}
            className={classNames({
              selected: toolbarAction === 'cursor-selected',
            })}
          >
            <Icon name="check" color={lightTheme.primary.mediumPurple} />
          </OwnS.ToolbarItem>
        </OwnS.Toolbar>
      </OwnS.SiteEditorToolbar>
      <OwnS.SiteEditor width="full" className={classNames('flex')}>
        <OwnS.SiteEditorFrame ref={frameRef} src={origin} />
        <OwnS.SiteEditorMenu>
          <OwnS.SiteEditorTitle level="h3" width="full">
            EasyEditor
          </OwnS.SiteEditorTitle>

          {siteEditorState === 'blocks' && (
            <OwnS.SiteContent>
              {blocks.map(({ blockId }) => (
                <OwnS.SiteBlock
                  padding="1rem 3px"
                  key={blockId}
                  onClick={() => handleBlockIdSelected(blockId)}
                >
                  {blockId}
                </OwnS.SiteBlock>
              ))}
            </OwnS.SiteContent>
          )}

          {siteEditorState === 'editor' && (
            <OwnS.SiteContent padding="0 1rem">
              <S.FormContainer
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
                  type="submit"
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
                >
                  Enviar
                </Button>
              </OwnS.SiteEditorFooter>
            </OwnS.SiteContent>
          )}
        </OwnS.SiteEditorMenu>
      </OwnS.SiteEditor>
    </Container>
  );
};
