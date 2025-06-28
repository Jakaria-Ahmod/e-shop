import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './features/viewSlice.js';

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});
