import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Oc9abMsHOhG37sSkzGFr/books';

export const fetchBooks = async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${BASE_URL}/books`, book);
  return response.data;
};

export const removeBook = async (bookId) => {
  await axios.delete(`${BASE_URL}/books/${bookId}`);
};
