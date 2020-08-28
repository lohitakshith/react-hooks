import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import AddBook from "./AddBook";
const Books = () => {
  const { books, deleteBook, hideForm } = useContext(BookContext);
  return (
    <div style={{ padding: "10px" }}>
      {books.length > 0 ? (
        <ul style={{ padding: 0 }}>
          {books.map(book => (
            <li key={book.id} className="list-item">
              <span style={{fontSize:20}}>{book.title}<br/>
              by <strong style={{fontSize:15}}>{book.author}</strong></span>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Books found </h3>
      )}
      <button className="btn btn-primary" onClick={hideForm}>Add Book</button>

      <AddBook />
    </div>
  );
};
export default Books;
