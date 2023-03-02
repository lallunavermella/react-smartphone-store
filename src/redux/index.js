import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './thunks';

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [], isLoading: false, isError: false },
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    numProducts: 0,
  },
  reducers: {
    incremented: (state) => {
      state.numProducts += 1;
    },

  },
});

export const { incremented } = cartSlice.actions;

export const selectCartProductCount = (state) => state.cart.numProducts;
export const selectListProduct = (state) => state.products;

export const cartReducer = cartSlice.reducer;
export const productReducer = productsSlice.reducer;
