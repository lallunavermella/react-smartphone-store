import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from './api';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    numProducts: sessionStorage.getItem('cart') || 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(productsApi.endpoints.postCart.matchFulfilled, (state) => {
      state.numProducts += 1;
      sessionStorage.setItem('cart', state.numProducts);
    });
  },
});

export const selectCartProductCount = (state) => state.cart.numProducts;

export const cartReducer = cartSlice.reducer;
