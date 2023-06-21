import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
import './Books.css'
const URL = "http://localhost:3000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div className="card-container">
      
        {books &&
          books.map((book, i) => (
            
              <Book key={i} book={book} />
            
          ))}
      
    </div>
  );
};

export default Books;
