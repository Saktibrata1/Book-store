import React from 'react';
import { Link } from 'react-router-dom';
import { Button, notification } from 'antd';

const BookDetail = ({ book }) => {
  const handleAddToCart = () => {
    // Get the existing cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the book is already in the cart
    const existingBook = cartItems.find(item => item.id === book.id);

    if (existingBook) {
      // Book is already in the cart, show a warning notification
      notification.warning({
        message: 'Warning',
        description: `${book.title} is already in the cart.`,
      });
    } else {
      // Book is not in the cart, add it to the cart
      cartItems.push(book);

      // Update the cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      // Show a success notification
      notification.success({
        message: 'Success',
        description: `${book.title} has been added to the cart.`,
      });
    }
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <Button type="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <Link to="/books">Back to Books</Link>
    </div>
  );
};

export default BookDetail;
