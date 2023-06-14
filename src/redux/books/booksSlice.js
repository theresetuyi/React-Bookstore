import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBooks, addBook, removeBook } from '../../AddApi/Api';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetchBooks();
  return response;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const response = await addBook(book);
  return response;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBook(bookId);
  return bookId;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookAction: (state, action) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export const { addBookAction } = booksSlice.actions;

export default booksSlice.reducer;
