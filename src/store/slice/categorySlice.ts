import { createSlice } from '@reduxjs/toolkit';
import { categoryReducer } from '../reducer';

export interface ICategory {
  name: string;
}

export interface IAction<T = any> {
  payload: T;
  type: string;
}

const initialState: ICategory[] = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: categoryReducer,
});

export const { addCategory } = categorySlice.actions;
export const categoryReducers = categorySlice.reducer;
