import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book);
  return response.data;
};

export const removeBook = async (bookId) => {
  await axios.delete(`${API_BASE_URL}/books/${bookId}`);
};
