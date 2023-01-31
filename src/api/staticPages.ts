import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Category, Response } from '../common/types';

export const staticPagesApi = (
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
  getStaticPages: builder.query({
    query: () => `static-pages`,
  }),
  getStaticPagesByCompanyId: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `static-pages/companies/${id}`,
      method: 'GET',
      params,
    }),
  }),
  getStaticPagesById: builder.query({
    query: (id: string) => `static-pages/${id}`,
  }),
  addStaticPage: builder.mutation({
    query: (body) => ({
      url: `static-pages`,
      method: 'POST',
      body,
    }),
  }),
  updateStaticPage: builder.mutation({
    query: ({ body, id }) => ({
      url: `static-pages/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
