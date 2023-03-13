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
  blocks: [
    // {
    //   id: 1,
    //   themeMode: 'light',
    //   background: '#ffffff',
    //   color: '#000000',
    //   brandId: 1,
    //   blockId: 'header-container',
    // },
    // {
    //   id: 9,
    //   themeMode: 'light',
    //   background: '#8082f7',
    //   color: '#ffffff',
    //   brandId: 1,
    //   blockId: 'scroll-button',
    // },
    // {
    //   id: 2,
    //   themeMode: 'light',
    //   background: 'rgb(226,74,0)',
    //   color: 'rgb(57,255,93)',
    //   brandId: 1,
    //   blockId: 'wrapper-page',
    // },
    // {
    //   id: 3,
    //   themeMode: 'light',
    //   background: 'rgb(254,0,182)',
    //   color: 'rgb(22,11,255)',
    //   brandId: 1,
    //   blockId: 'categories-container',
    // },
    // {
    //   id: 4,
    //   themeMode: 'light',
    //   background: 'rgb(10,0,144)',
    //   color: 'rgb(238,255,27)',
    //   brandId: 1,
    //   blockId: 'category-item',
    // },
    // {
    //   id: 5,
    //   themeMode: 'light',
    //   background: 'rgb(203,0,92)',
    //   color: 'rgb(0,246,31)',
    //   brandId: 1,
    //   blockId: 'product-card',
    // },
    // {
    //   id: 7,
    //   themeMode: 'light',
    //   background: 'rgb(254,122,0)',
    //   color: 'rgb(0,39,119)',
    //   brandId: 1,
    //   blockId: 'shipping-button',
    // },
    // {
    //   id: 6,
    //   themeMode: 'light',
    //   background: 'rgb(221,189,0)',
    //   color: 'rgb(147,0,12)',
    //   brandId: 1,
    //   blockId: 'wish-list-icon',
    // },
    // {
    //   id: 8,
    //   themeMode: 'light',
    //   background: 'rgb(32,255,96)',
    //   color: 'rgb(67,252,255)',
    //   brandId: 1,
    //   blockId: 'footer-container',
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
