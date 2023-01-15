import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Category, Response } from '../common/types';

export const locationApi = (
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
  getLocationsByCompanyId: builder.query<Response<Category[]>, unknown>({
    query: ({ params, id }) => ({
      url: `locations/companies/${id}`,
      method: 'GET',
      params,
    }),
  }),
  getLocationById: builder.query({
    query: (id: string) => `locations/${id}`,
  }),
  addLocation: builder.mutation({
    query: (body) => ({
      url: `locations`,
      method: 'POST',
      body,
    }),
  }),
  updateLocation: builder.mutation({
    query: ({ body, id }) => ({
      url: `locations/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
