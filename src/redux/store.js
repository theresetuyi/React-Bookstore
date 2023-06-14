import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import checkReducer from './categories/categoriesSlice';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: booksReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
