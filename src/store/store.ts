import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { easyMenuApi } from '../api';
import { categoryReducers } from './slice/categorySlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducers,
    [easyMenuApi.reducerPath]: easyMenuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(easyMenuApi.middleware),
});

setupListeners(store.dispatch);
