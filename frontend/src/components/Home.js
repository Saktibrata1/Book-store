import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Book from './Book/Book';
import "./Home.css";

const URL = "http://localhost:3000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Home = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button style={{ marginTop: 15, background: 'orangered' }} type="primary" shape="round">
        <NavLink to="/books" style={{ color: 'white' }}>
          View All Products
        </NavLink>
      </Button>
      <div className="card-container">
      
        {books &&
          books.map((book, i) => (
            
              <Book key={i} book={book} />
            
          ))}
      
    </div>
    </div>
  );
};

export default Home ;
