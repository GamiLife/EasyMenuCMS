import { createSlice } from '@reduxjs/toolkit';

import { siteEditorReducer } from '../reducer/siteEditorReducer';

export type TSiteEditorState = 'blocks' | 'editor';
export interface IBlockEditor {
  blockId: string;
  background?: string;
  color?: string;
  id: number;
  themeMode: string;
  brandId: number;
}

export type TToolbarAction = '' | 'cursor-selected';

export interface ISiteEditorState {
  blocks: IBlockEditor[];
  blockIdSelected?: string;
  toolbarAction?: TToolbarAction;
  siteEditorState: TSiteEditorState;
}

export const siteEditorInitialState: ISiteEditorState = {
  blocks: [],
  siteEditorState: 'blocks',
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
