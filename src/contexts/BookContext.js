import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const booksData = JSON.parse(localStorage.getItem("Books"));
  const [books, setBooks] = useState(booksData ? booksData : []);
  const [show, setShow] = useState(false)

  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
    setShow(!show)
  };
  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  
  };
  const hideForm = () =>{
    setShow(!show)
  }
  useEffect( () => {
  setTimeout(() => {
      localStorage.setItem("Books", JSON.stringify(books));
    }, 2000);
  }, [books])
  return (
    <BookContext.Provider value={{ books, addBook, show, deleteBook, hideForm }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
