import { configureStore } from '@reduxjs/toolkit';
import addRemoveReducer from './books/booksSlice';
import checkReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: addRemoveReducer,
  },
});

export default store;
