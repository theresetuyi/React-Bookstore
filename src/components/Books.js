import React, { useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const newBook = { title, author };
    setBooks([...books, newBook]);
    event.target.reset();
  };

  return (
    <div>
      <h2>Add Books</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Books;
