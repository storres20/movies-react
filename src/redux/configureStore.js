import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies';

const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});

export default store;
