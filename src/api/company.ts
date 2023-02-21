import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export const companyApi = (
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
  getCompanyById: builder.query({
    query: (id: string) => `companies/${id}`,
  }),
  updateCompany: builder.mutation({
    query: ({ body, id }) => ({
      url: `companies/${id}`,
      method: 'PUT',
      body,
    }),
  }),
});
