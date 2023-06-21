import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import CustomerInfo from "./components/Cart/CustomerInfo";
import ProductPlaced from "./components/Cart/ProductPlaced";
import SignIn from "./components/admin/SignIn";
import Booklist from "./components/admin/Booklist";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/checkout" element={<Checkout />} exact />
          <Route path="/customer-info" element={<CustomerInfo />} exact />
          <Route path="/product-placed" element={<ProductPlaced />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/admin" element={<Booklist />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
