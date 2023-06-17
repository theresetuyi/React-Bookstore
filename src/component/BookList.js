import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/Books';
import '../index.css';

const Progress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div className="progress-container">
      <div className="circular-progress-container">
        <div className="circular-progress" />
      </div>
      <Stat percent={completed} />
      <div className="progress-divider" />
      <div className="current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">{currentChapter}</p>
        </div>
        <div>
          <button className="primary-button" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

const Stat = ({ percent = 0 }) => (
  <div className="progress-stat">
    <p className="percent-complete">{`${percent}%`}</p>
    <p className="completed">Completed</p>
  </div>
);

Stat.propTypes = {
  percent: PropTypes.string.isRequired,
};

const Book = ({ book }) => {
  const {
    item_id: id, title, category, author, progress,
  } = book;

  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h1 className="book-category">{category}</h1>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">
            <i className="fas fa-user" />
            {' '}
            {author}
          </h6>
          {' '}
          <ActionButtons id={id} />
        </div>
        <Progress progress={progress} />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.shape({
      currentChapter: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const ActionButtons = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteBook(id));

  return (
    <div className="action-buttons">
      <button className="button-outline" type="button">Comments</button>
      <div className="vertical-divider" />
      <button className="button-outline" type="button" onClick={handleRemove}>Remove</button>
      <div className="vertical-divider" />
      <button className="button-outline" type="button">Edit</button>
    </div>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

const BookList = ({ books }) => {
  if (!books) {
    return null; // Return early if books is undefined
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(Book.propTypes.book),
};

BookList.defaultProps = {
  books: [], // Provide an empty array as the default value
};

export default BookList;
