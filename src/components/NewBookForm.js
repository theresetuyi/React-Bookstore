import React from 'react';
import PropTypes from 'prop-types';

const NewBookForm = ({ handleAddBook }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const newBook = { title, author };
    handleAddBook(newBook);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

NewBookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
};

export default NewBookForm;
