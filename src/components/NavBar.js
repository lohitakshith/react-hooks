import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
const NavBar = () => {
  const { books } = useContext(BookContext);
  // const { books, setBooks } = useState([])
  // console.log(useContext(BookContext))
  return (
    <div className="navBar">
      <h1>Books</h1>
      {books.length > 0 && <h1>{books.length}</h1>}
    </div>
  );
};
export default NavBar;
