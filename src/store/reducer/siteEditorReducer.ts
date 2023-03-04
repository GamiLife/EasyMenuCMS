import { WritableDraft } from 'immer/dist/internal';
import { IAction } from '../slice';
import { IBlockEditor, ISiteEditorState } from '../slice/siteEditorSlice';

export type IAddBlockAction = {
  block: IBlockEditor;
};

export type ISetBlockIdAction = {
  blockId: string;
};

export const siteEditorReducer = {
  updateBlock: (
    state: WritableDraft<ISiteEditorState>,
    action: IAction<IAddBlockAction>
  ) => {
    const { payload } = action;
    const { block } = payload;

    const blockFound = state.blocks.find(
      ({ blockId }) => blockId === block.blockId
    );
    if (blockFound) {
      blockFound.background = block.background;
      blockFound.color = block.color;
    }
  },
  setBlockIdSelected(
    state: WritableDraft<ISiteEditorState>,
    action: IAction<ISetBlockIdAction>
  ) {
    const {
      payload: { blockId },
    } = action;

    state.blockIdSelected = blockId;
  },
  setToolbarAction(
    state: WritableDraft<ISiteEditorState>,
    action: IAction<ISiteEditorState['toolbarAction']>
  ) {
    const { payload } = action;
    state.toolbarAction = payload;
  },
  setSideEditorState(
    state: WritableDraft<ISiteEditorState>,
    action: IAction<ISiteEditorState['siteEditorState']>
  ) {
    const { payload } = action;
    state.siteEditorState = payload;
  },
};
