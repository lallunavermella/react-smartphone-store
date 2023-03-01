import { createSlice } from '@reduxjs/toolkit';

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

export default cartSlice.reducer;
