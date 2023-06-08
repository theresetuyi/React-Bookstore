import React, { useState } from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';

const Books = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h2>Add Books</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <NewBookForm handleAddBook={handleAddBook} />
    </div>
  );
};

export default Books;
