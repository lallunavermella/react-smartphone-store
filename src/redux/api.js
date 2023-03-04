import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itx-frontend-test.onrender.com/' }),
  keepUnusedDataFor: 3600, // 1h
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'api/product',
    }),
    getProductDetail: builder.query({
      query: (productId) => `api/product/${productId}`,
    }),
    postCart: builder.mutation({
      query: ({ ...body }) => ({
        url: 'api/cart',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery, usePostCartMutation } = productsApi;
