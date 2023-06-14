import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../../BooksApi/BooksApi';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];
export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetchBooks();
  // console.log(response, 'this is api data');
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
    addBook: (state, action) => {
      // Add a book to the state
      state.push(action.payload);
    },
    // Remove a book from the state by id
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
});

export const { addBookAction, removeBookAction } = booksSlice.actions;

export default booksSlice.reducer;
