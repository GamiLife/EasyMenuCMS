import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { categoryApi } from './category';
import { locationApi } from './locations';
import { newApi } from './new';

export const easyMenuApi = createApi({
  reducerPath: 'easyMenuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:4200/easymenu/api/v1',
  }),
  endpoints: (builder) => ({
    ...categoryApi(builder),
    ...newApi(builder),
    ...locationApi(builder),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetCategoriesByCompanyIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,

  useGetNewByIdQuery,
  useGetNewsByCompanyIdQuery,
  useAddNewMutation,
  useUpdateNewMutation,

  useGetLocationByIdQuery,
  useGetLocationsByCompanyIdQuery,
  useAddLocationMutation,
  useUpdateLocationMutation,
} = easyMenuApi;

export const endpoints = {
  categories: {
    pagination: useGetCategoriesByCompanyIdQuery,
    create: useAddCategoryMutation,
    update: useUpdateCategoryMutation,
  },
  news: {
    pagination: useGetNewsByCompanyIdQuery,
    create: useAddNewMutation,
    udpate: useUpdateCategoryMutation,
  },
  locations: {
    pagination: useGetLocationsByCompanyIdQuery,
    create: useAddLocationMutation,
    udpate: useUpdateLocationMutation,
  },
};
