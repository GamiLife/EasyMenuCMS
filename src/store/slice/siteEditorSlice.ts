import { createSlice } from '@reduxjs/toolkit';

import { siteEditorReducer } from '../reducer/siteEditorReducer';
import { lightTheme } from '../../../styles/design-system/theme';

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
  blocks: [
    {
      id: 2,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'header-container',
    },
    {
      id: 3,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'category-item',
    },
    {
      id: 4,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'wrapper-page',
    },
    {
      id: 5,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'product-card',
    },
    {
      id: 6,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'wish-list-icon',
    },
    {
      id: 7,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'shipping-button',
    },
    {
      id: 8,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'footer-container',
    },
    {
      id: 9,
      themeMode: 'light',
      background: 'red',
      color: 'red',
      brandId: 1,
      blockId: 'scroll-button',
    },
    {
      id: 1,
      themeMode: 'light',
      background: 'white',
      color: 'black',
      brandId: 1,
      blockId: 'categories-container',
    },
    // {
    //   blockId: 'header-container',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.black}`,
    // },
    // {
    //   blockId: 'categories-container',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.black}`,
    // },
    // {
    //   blockId: 'wrapper-page',
    //   background: `${lightTheme.primary.second}`,
    //   color: `${lightTheme.primary.black}`,
    // },
    // {
    //   blockId: 'product-card',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.black}`,
    // },
    // {
    //   blockId: 'wish-list-icon',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.first}`,
    // },
    // {
    //   blockId: 'shipping-button',
    //   background: `${lightTheme.primary.first}`,
    //   color: `${lightTheme.primary.white}`,
    // },
    // {
    //   blockId: 'footer-container',
    //   background: `${lightTheme.primary.first}`,
    //   color: `${lightTheme.primary.white}`,
    // },
    // {
    //   blockId: 'scroll-button',
    //   background: `${lightTheme.primary.mediumPurple}`,
    //   color: `${lightTheme.primary.white}`,
    // },
    // {
    //   blockId: 'container-selection-area',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.black}`,
    // },
    // {
    //   blockId: 'location-card',
    //   background: `${lightTheme.primary.white}`,
    //   color: `${lightTheme.primary.black}`,
    // },
  ],
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
