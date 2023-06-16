import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBooks, fetchBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [getTitle, setTitle] = useState('');
  const [getAuthor, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (getTitle.trim() && getAuthor.trim()) {
      await dispatch(
        postBooks({
          item_id: uuidv4(),
          title: getTitle,
          author: getAuthor,
          category: 'Inspirational',
        }),
      ).then(() => {
        dispatch(fetchBook());
      });
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please enter a book title and author.');
    }
  };

  return (
    <div className="addInput">
      <h2> ADD NEW BOOK </h2>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={getTitle}
          onChange={handleTitle}
        />
        {' '}
        <input
          type="text"
          placeholder="Author"
          value={getAuthor}
          onChange={handleAuthor}
        />
        {' '}
        <button type="submit"> Add Book </button>
        {' '}
        <br />
        <span className="submit-warning">
          {' '}
          {message}
          {' '}
        </span>
        {' '}
      </form>
      {' '}
    </div>
  );
};

export default AddBook;
