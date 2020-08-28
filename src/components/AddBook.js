import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const {addBook, show, hideForm } = useContext(BookContext);
  const addNewBook = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      {show && <div className="d-flex justify-content-center align-items-center" style={{zIndex:999, width:'100%', height:'100vh',position:'absolute', top:0,bottom:0,left:0, right:0, background:'rgba(0,0,0,0.5)'}}>
        <div className="card">
          <div className="card-header d-flex justify-content-between px-2">
            <h5 className="mb-0">Add New Book</h5>
            <button type="button" className="close" onClick={hideForm} >
          <span aria-hidden="true">&times;</span>
        </button>

          </div>
          <div className="card-body py-4">
        <form onSubmit={addNewBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </form>
      </div>
      <div className="card-footer d-flex flex-row-reverse px-2">
        <button className="btn btn-primary ml-3" disabled={title && author ? false : true} onClick={addNewBook}>Add</button>
        <button className="btn btn-primary"  onClick={hideForm}>Close</button>
        </div>
      </div>
    </div>}
    </div>
  );
};
export default AddBook;
