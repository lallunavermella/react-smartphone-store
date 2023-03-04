import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api';

import { cartReducer } from './index';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export default setupStore;
