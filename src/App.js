import React from "react";
import "./style.css";
import BookContextProvider from "./contexts/BookContext";
import NavBar from "./components/NavBar";
import Books from './components/Books';
const App = () => {
  return (
    <BookContextProvider>
      <NavBar />
      <Books />
    </BookContextProvider>
  );
};
export default App;
