import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies';
import allDataReducer from './movies/allData';

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    allData: allDataReducer,
  },
});

export default store;
