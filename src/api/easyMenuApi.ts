import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { staticPagesApi } from './staticPages';
import { categoryApi } from './category';
import { locationApi } from './locations';
import { companyApi, siteEditorApi } from './company';
import { sauceApi } from './sauces';
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
    ...staticPagesApi(builder),
    ...sauceApi(builder),
    ...companyApi(builder),
    ...siteEditorApi(builder),
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

  useGetStaticPagesByIdQuery,
  useGetStaticPagesByCompanyIdQuery,
  useAddStaticPageMutation,
  useUpdateStaticPageMutation,

  useGetSauceByIdQuery,
  useGetSaucesByCompanyIdQuery,
  useAddSauceMutation,
  useUpdateSauceMutation,

  useUpdateBlockCompanyMutation,
  useGetCompanyByIdQuery,
  useUpdateCompanyMutation,
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
  sauces: {
    pagination: useGetSaucesByCompanyIdQuery,
    create: useAddSauceMutation,
    update: useUpdateSauceMutation,
  },
  'static-pages': {
    pagination: useGetStaticPagesByCompanyIdQuery,
    create: useAddStaticPageMutation,
    udpate: useUpdateStaticPageMutation,
  },
  company: {
    udpate: useUpdateCompanyMutation,
  },
};
