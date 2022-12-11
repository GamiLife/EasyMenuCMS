import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response, Category } from '../common/types';

export const easyMenuApi = createApi({
  reducerPath: 'easyMenuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:4200/easymenu/api/v1',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
    }),
    getCategoriesByCompanyId: builder.query<Response<Category[]>, unknown>({
      query: ({ params, id }) => ({
        url: `categories/companies/${id}`,
        method: 'GET',
        params,
      }),
    }),
    getCategoryById: builder.query({
      query: (id: string) => `categories/${id}`,
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: `categories`,
        method: 'POST',
        body,
      }),
    }),
    updateCategory: builder.mutation({
      query: (body) => ({
        url: `categories`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesByCompanyIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} = easyMenuApi;
