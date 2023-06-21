import React, { useEffect, useState } from "react";
import axios from "axios";
import BookAdmin from "./BookAdmin";
import "./BookAdmin.css";

const URL = "http://localhost:3000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Booklist = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="card-container">
      {books &&
        books.map((book, i) => (
          <BookAdmin key={i} book={book} />
        ))}
    </div>
  );
};

export default Booklist;
