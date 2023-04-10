import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Category, Response } from '../common/types';

export const combosApi = (
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
  getCombos: builder.query<Response<Category[]>, unknown>({
    query: ({ params }) => ({
      url: `combos`,
      method: 'GET',
      params,
    }),
  }),
  getCombo: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `combos/${id}`,
      method: 'GET',
      params,
    }),
  }),
  addCombo: builder.mutation({
    query: (body) => ({
      url: `combos`,
      method: 'POST',
      body,
    }),
  }),
  updateCombo: builder.mutation({
    query: ({ body, id }) => ({
      url: `combos/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
