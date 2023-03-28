import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Category, Response } from '../common/types';

export const dishesApi = (
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
  getDishes: builder.query<Response<Category[]>, unknown>({
    query: ({ params }) => ({
      url: `dishes/byPagination`,
      method: 'GET',
      params,
    }),
  }),
  getDish: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `dishes/short/${id}`,
      method: 'GET',
      params,
    }),
  }),
  addDish: builder.mutation({
    query: (body) => ({
      url: `dishes`,
      method: 'POST',
      body,
    }),
  }),
  updateDish: builder.mutation({
    query: ({ body, id }) => ({
      url: `dishes/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
