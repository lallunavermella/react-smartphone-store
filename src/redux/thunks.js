import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://itx-frontend-test.onrender.com/api/product');
    const data = await response.json();
    return data;
  },
);

export const fetchProductDetail = createAsyncThunk(
  'products/fetchProductDetail',
  async (productId) => {
    const response = await fetch(`https://itx-frontend-test.onrender.com/api/product/${productId}`);
    const data = await response.json();
    return data;
  },
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (cartData) => {
    const response = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });
    const data = await response.json();
    return data;
  },
);
