import { createSlice } from '@reduxjs/toolkit';
import { categoryReducer, TSearchInitialState } from '../reducer';

export interface ICategory {
  name: string;
}

export type TCategoryState = {} & TSearchInitialState<any>;

export interface IAction<T = any> {
  payload: T;
  type: string;
}

export const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  search: '',
  items: [],
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: categoryReducer,
  extraReducers: {},
});

export const categoryActions = categorySlice.actions;
export const categoryReducers = categorySlice.reducer;
