import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAsync } from '../redux/books/booksSlice';

function Book({ title, author, itemId }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <p className="title">{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBookAsync(itemId))}>Remove</button>
      {' '}
      {/* Update payload */}
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired, // Update prop name
};

export default Book;
