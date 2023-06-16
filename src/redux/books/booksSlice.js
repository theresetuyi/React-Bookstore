import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import booksList from '../../booksList';

const appid = 'Oc9abMsHOhG37sSkzGFr';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appid}/books`;

const initialState = {
  book: [],
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const fetchBook = createAsyncThunk(
  'books/getBooks',
  async (data, thunk) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunk.rejectWithValue('something went wrong...');
    }
  },
);

export const postBooks = createAsyncThunk(
  'books/postBooks',
  async (data, thunk) => {
    try {
      const resp = await axios.post(url, data);
      return resp.data;
    } catch (error) {
      return thunk.rejectWithValue('something went wrong...');
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBooks',
  async (itemid) => {
    try {
      const getBook = `${url}/${itemid}`;
      await axios.delete(getBook);
      return itemid;
    } catch (error) {
      return error.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.book.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const newState = { ...state };
      newState.book = newState.book.filter((book) => book.item_id !== bookId);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })
      .addCase(postBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
