import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    viewType: 'grid',
  },
  reducers: {
    setGridView: state => {
      state.viewType = 'grid';
    },
    setListView: state => {
      state.viewType = 'list';
    },
  },
});

export const { setGridView, setListView } = viewSlice.actions;
export default viewSlice.reducer;
