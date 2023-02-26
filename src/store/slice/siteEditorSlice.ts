import { createSlice } from '@reduxjs/toolkit';
import { siteEditorReducer } from '../reducer/siteEditorReducer';

export interface IBlockEditor {
  blockId: string;
  background?: string;
  color?: string;
}

export type TToolbarAction = '' | 'cursor-selected';

export interface ISiteEditorState {
  blocks: IBlockEditor[];
  blockIdSelected?: string;
  toolbarAction?: TToolbarAction;
}

export const siteEditorInitialState: ISiteEditorState = {
  blocks: [
    {
      blockId: 'category-container',
      background: 'white',
      color: '',
    },
    {
      blockId: 'header-container',
      background: 'white',
      color: '',
    },
    {
      blockId: 'footer-container',
      background: 'blue',
      color: '',
    },
  ],
  toolbarAction: '',
};

export const siteEditorSlice = createSlice({
  name: 'siteEditor',
  initialState: siteEditorInitialState,
  reducers: siteEditorReducer,
  extraReducers: {},
});

export const siteEditorActions = siteEditorSlice.actions;
export const siteEditorReducers = siteEditorSlice.reducer;
