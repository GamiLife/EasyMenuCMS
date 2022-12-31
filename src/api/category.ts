import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { Category , Response } from "../common/types";

export const categoryApi = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    'easyMenuApi'
  >
) => ({
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
    query: ({ body, id }) => ({
      url: `categories/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
