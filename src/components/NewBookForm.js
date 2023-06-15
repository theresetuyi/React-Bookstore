import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAsync, removeBookAsync } from '../redux/books/booksSlice';
import Book from './Book';

function NewBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, id: uuidv4() };
    dispatch(addBookAsync(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleRemove = (bookId) => {
    dispatch(removeBookAsync(bookId));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            itemId={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            onRemove={() => handleRemove(book.id)}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default NewBookForm;
