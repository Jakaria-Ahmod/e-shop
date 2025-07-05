import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 1,
  },
  reducers: {
    InCrement: state => {
      state.count += 1;
    },
    DeCrement: state => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});

export const { InCrement, DeCrement } = countSlice.actions;
export default countSlice.reducer;
