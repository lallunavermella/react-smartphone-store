import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer, productReducer } from './index';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
