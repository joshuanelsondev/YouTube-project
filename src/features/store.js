import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './VideosSlice/VieoSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
