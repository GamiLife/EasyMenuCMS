import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Category, Response } from '../common/types';

export const newApi = (
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
  getNewsByCompanyId: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `news/companies/${id}`,
      method: 'GET',
      params,
    }),
  }),
  getNewById: builder.query({
    query: (id: string) => `news/${id}`,
  }),
  addNew: builder.mutation({
    query: (body) => ({
      url: `news`,
      method: 'POST',
      body,
    }),
  }),
  updateNew: builder.mutation({
    query: ({ body, id }) => ({
      url: `news/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
