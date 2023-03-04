import { createSlice } from '@reduxjs/toolkit';

import { siteEditorReducer } from '../reducer/siteEditorReducer';
import { lightTheme } from '../../../styles/design-system/theme';

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
      blockId: 'header-container',
      background: `${lightTheme.primary.white}`,
      color: `${lightTheme.primary.black}`,
    },
    {
      blockId: 'categories-container',
      background: `${lightTheme.primary.white}`,
      color: `${lightTheme.primary.black}`,
    },
    {
      blockId: 'wrapper-page',
      background: `${lightTheme.primary.second}`,
      color: `${lightTheme.primary.black}`,
    },
    {
      blockId: 'product-card',
      background: `${lightTheme.primary.white}`,
      color: `${lightTheme.primary.black}`,
    },
    {
      blockId: 'wish-list-icon',
      background: `${lightTheme.primary.white}`,
      color: `${lightTheme.primary.first}`,
    },
    {
      blockId: 'shipping-button',
      background: `${lightTheme.primary.first}`,
      color: `${lightTheme.primary.white}`,
    },
    {
      blockId: 'footer-container',
      background: `${lightTheme.primary.first}`,
      color: `${lightTheme.primary.white}`,
    },
    {
      blockId: 'scroll-button',
      background: `${lightTheme.primary.mediumPurple}`,
      color: `${lightTheme.primary.white}`,
    },
    {
      blockId: 'container-selection-area',
      background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
    },
    {
      blockId: 'location-card',
      background: `${lightTheme.primary.white}`,
      color: `${lightTheme.primary.black}`,
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