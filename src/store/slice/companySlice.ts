import { createSlice } from '@reduxjs/toolkit';
import { companyReducer } from '../reducer/companyReducer';

export interface ICompanyInitialState {
  id: number;
  name: string;
  description: string;
  slugUrl: string;
}

export const companyInitialState: ICompanyInitialState = {
  id: 1,
  name: 'SeaFastFood',
  description: 'Restaurant to sell sea fast food',
  slugUrl: 'sea-fast-food',
};

export const companySlice = createSlice({
  name: 'companies',
  initialState: companyInitialState,
  reducers: companyReducer,
  extraReducers: {},
});

export const companyActions = companySlice.actions;
export const companyReducers = companySlice.reducer;
