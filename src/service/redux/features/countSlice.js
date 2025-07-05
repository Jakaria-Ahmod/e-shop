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
    setCoutReset: state => {
      state.count = 1;
    },
    setCounterValue: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { InCrement, DeCrement, setCoutReset, setCounterValue } =
  countSlice.actions;
export default countSlice.reducer;
