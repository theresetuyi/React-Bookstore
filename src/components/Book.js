import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, handleDeleteBook,
}) => {
  const handleDelete = () => {
    handleDeleteBook(id);
  };

  return (
    <li>
      <span>
        {title}
        {' '}
        by
        {' '}
        {author}
      </span>
      <button type="button" onClick={handleDelete}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
