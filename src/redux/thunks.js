import { createAsyncThunk } from '@reduxjs/toolkit';

const updateCart = createAsyncThunk(
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

export default updateCart;
