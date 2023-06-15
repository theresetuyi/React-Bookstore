import axios from 'axios';

const ADD_BOOK = 'booksSlice/books/addBooks';
const REMOVE_BOOK = 'booksSlice/books/removeBooks';
const FETCH_BOOK = 'booksSlice/books/fetchbook';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Oc9abMsHOhG37sSkzGFr/books/';

const initialState = [];

const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case FETCH_BOOK:
      return action.book;
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

export const fetchBookApi = () => async (dispatch) => {
  const books = await axios.get(BASE_URL);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Oc9abMsHOhG37sSkzGFr/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeBook(id));
};

export const addBookApi = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(BASE_URL, newBook);
  dispatch(addBook(book));
};

export default addRemoveReducer;
