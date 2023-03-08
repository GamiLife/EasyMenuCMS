import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import { Category, Response } from '../common/types';

export const sauceApi = (
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
  getSaucesByCompanyId: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `sauces`,
      //   url: `sauces/companies/${id}`,
      method: 'GET',
      params,
    }),
  }),
  getSauceById: builder.query({
    query: (id: string) => `sauces/${id}`,
  }),
  addSauce: builder.mutation({
    query: (body) => ({
      url: `sauces`,
      method: 'POST',
      body,
    }),
  }),
  updateSauce: builder.mutation({
    query: ({ body, id }) => ({
      url: `sauces/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
