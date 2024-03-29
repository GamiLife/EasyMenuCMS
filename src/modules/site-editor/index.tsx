import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Icon } from '@gamiui/standard';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import classNames from 'classnames';

import {
  ISiteEditorState,
  siteEditorSlice,
  TSiteEditorState,
} from '../../store';
import { SiteEditorForm } from './SiteEditorForm';
import { lightTheme } from '../../../styles/design-system/theme';
import { RootState } from '../../store/store';
import * as OwnS from './styles';

export const SiteEditor = () => {
  const { blocks, blockIdSelected, toolbarAction, siteEditorState } =
    useSelector((state: RootState) => state.siteEditor);
  const dispatch = useDispatch();

  const frameRef = useRef<any>();
  const base = process.env.WEB_URL;

  const origin = `${process.env.WEB_URL}/sea-fast-food`;

  const handleBlockIdSelected = (blockIdSelected: string) => {
    dispatch(
      siteEditorSlice.actions.setBlockIdSelected({
        blockId: blockIdSelected,
      })
    );
  };

  const handleSiteEditorState = (siteEditorStateProp: TSiteEditorState) => {
    dispatch(siteEditorSlice.actions.setSideEditorState(siteEditorStateProp));
  };

  useEffect(() => {
    if (!blockIdSelected) return handleSiteEditorState('blocks');
    handleSiteEditorState('editor');
  }, [blockIdSelected]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin !== base) return;
      const { type, message } = event.data;

      if (!type) return;
      if (type === 'block-selection' && message) {
        const { blockId } = message;
        handleBlockIdSelected(blockId);
        handlePickToolbarAction('');
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
  }, [toolbarAction]);

  useEffect(() => {
    async function companyFetch() {
      const response = await fetch(
        `${process.env.MY_MICROSERVICE_URL}/easymenu/api/v1/companies/1`
      );
      const {
        data: { theme },
      } = await response.json();
      dispatch(siteEditorSlice.actions.setBlocks(theme));
    }
    companyFetch();
  }, []);

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

  const handleMouseEnterOnBlockSidebar = (blockId: string) => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'hover-block-from-sidebar',
        message: blockId,
      },
      base
    );
  };

  const handleMouseLeaveOnBlockSidebar = () => {
    frameRef.current.contentWindow.postMessage(
      {
        type: 'hover-block-from-sidebar',
        message: '',
      },
      base
    );
  };

  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <OwnS.SiteEditorScreen width="full" padding="1rem">
        <OwnS.SiteEditorToolbar
          className={classNames('flex', 'justify-between', 'items-center')}
        >
          <OwnS.SiteTitle level="h2">Site Editor:</OwnS.SiteTitle>
          <OwnS.Toolbar>
            {handle.active ? (
              <OwnS.ToolbarItem onClick={handle.exit}>
                <Icon name="close" color={lightTheme.primary.mediumPurple} />
              </OwnS.ToolbarItem>
            ) : (
              <OwnS.ToolbarItem onClick={handle.enter}>
                <Icon name="controls" color={lightTheme.primary.mediumPurple} />
              </OwnS.ToolbarItem>
            )}
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
                    onMouseEnter={() => handleMouseEnterOnBlockSidebar(blockId)}
                    onMouseLeave={() => handleMouseLeaveOnBlockSidebar()}
                    onClick={() => handleBlockIdSelected(blockId)}
                  >
                    {blockId}
                  </OwnS.SiteBlock>
                ))}
              </OwnS.SiteContent>
            )}

            {siteEditorState === 'editor' && (
              <SiteEditorForm frameRef={frameRef} />
            )}
          </OwnS.SiteEditorMenu>
        </OwnS.SiteEditor>
      </OwnS.SiteEditorScreen>
    </FullScreen>
  );
};
