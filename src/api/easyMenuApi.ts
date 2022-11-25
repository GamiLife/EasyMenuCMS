import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const easyMenuApi = createApi({
  reducerPath: 'easyMenuApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
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

export const { useGetCategoriesQuery } = easyMenuApi;
