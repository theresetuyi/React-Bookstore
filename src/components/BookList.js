import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, deleteBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';

const BooksList = () => {
  const { book, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="notify">
        {' '}
        <h2> Loading... </h2>
        {' '}
      </div>
    );
  }

  if (error) {
    return (
      <div className="notify">
        {' '}
        <h2> something went wrong... </h2>
        {' '}
      </div>
    );
  }

  if (book.length === 0) {
    return (
      <>
        <section className="books">
          <div>
            <h4 className="empty-store"> No Books Found... </h4>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        <footer>
          <hr className="line" />
          <AddBook />
          {' '}
        </footer>
        {' '}
      </>
    );
  }

  const handleDelete = async (id) => {
    dispatch(deleteBook(id)).then(() => {
      dispatch(fetchBook());
    });
  };

  return (
    <>
      <section className="books">
        <div className="book-list">
          <ul>
            {' '}
            {Object.keys(book).length > 0 ? (
              Object.keys(book).map((item) => (
                <li key={item}>
                  {' '}
                  {book[item][0].item_id}
                  {' '}
                  <div className="bContainer">
                    <div className="bookitemContainer">
                      <div className="bookitem">
                        <h3 className="cart"> Action </h3>
                        {' '}
                        <h2 className="title">
                          {' '}
                          {book[item][0].title}
                          {' '}
                        </h2>
                        {' '}
                        <h4 className="author">
                          {' '}
                          {book[item][0].author}
                          {' '}
                        </h4>
                        {' '}
                      </div>
                      {' '}
                      <div className="actionBtn">
                        <button type="button"> Comments </button>
                        {' '}
                        <span className="lineup"> | </span>
                        {' '}
                        <button
                          type="button"
                          className="removeBook"
                          onClick={() => {
                            handleDelete(item);
                          }}
                        >
                          remove
                          {' '}
                        </button>
                        {' '}
                        <span className="lineup"> | </span>
                        {' '}
                        <button type="button"> Edit </button>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                    <div className="complete">
                      <div className="progress-bar"> </div>
                      {' '}
                      <h3 className="progress-status">
                        {' '}
                        64 %
                        {' '}
                        <br />
                        {' '}
                        <span className="comp">
                          {' '}
                          Completed
                          {' '}
                        </span>
                        {' '}
                      </h3>
                      {' '}
                    </div>
                    {' '}
                    <div className="chapter">
                      <h3 className="chapter-title"> CURRENT CHAPTER </h3>
                      {' '}
                      <p className="chapter-info"> Chapter 17 </p>
                      {' '}
                      <button type="button"> UPDATE PROGRESS </button>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </li>
              ))
            ) : (
              <p className="no-book"> No books were added </p>
            )}
            {' '}
          </ul>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      <footer>
        <hr className="line" />
        {' '}
        <AddBook />
        {' '}
      </footer>
      {' '}
    </>
  );
};

export default BooksList;
