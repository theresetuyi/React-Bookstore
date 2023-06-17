import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import AddBook from './AddBook';
import { loadBooks } from '../redux/books/Books';
import '../index.css';

const FormBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <div>
      <BookList books={books} />
      <div className="horizontal-divider" />
      <AddBook />
    </div>
  );
};

export default FormBook;
