import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialVideos: [],
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.initialVideos = action.payload;
    },
  },
});

export const { setSearch } = videoSlice.actions;

export default videoSlice.reducer;
