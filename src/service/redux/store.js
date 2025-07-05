import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './features/viewSlice.js';
import countSlice from './features/countSlice.js';
import cartSlice from './features/cartSlice.js';

export const store = configureStore({
  reducer: {
    view: viewReducer,
    count: countSlice,
    cart: cartSlice,
  },
});
