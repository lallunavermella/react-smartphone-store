import { createSlice } from '@reduxjs/toolkit';
import { fetchProductDetail, fetchProducts } from './thunks';

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [], isLoading: true, isError: false },
  reducers: {},
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

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: { product: {}, isLoading: true, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetail.rejected, (state) => {
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
export const selectProductDetail = (state) => state.productDetail;

export const cartReducer = cartSlice.reducer;
export const productReducer = productsSlice.reducer;
export const productDetailReducer = productDetailSlice.reducer;
