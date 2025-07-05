import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const { product, qty } = action.payload;
      const existingProduct = state.items.find(item => item.id == product.id);
      if (existingProduct) {
        existingProduct.qty += qty;
      } else {
        state.items.push({ ...product, qty });
      }
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const product = state.items.find(item => item.id == id);
      if (product && qty > 0) {
        product.qty = qty;
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addCart, updateQty, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
