import React, { useState, useEffect } from 'react';
import { Button, Table, InputNumber } from 'antd';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        return {
          ...item,
          quantity: quantity
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="cart-item">
          <img src={record.image} alt={text} className="cart-item-image" />
          <div>
            <h4>{text}</h4>
            <p>{record.author}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <p>Rs {text}</p>
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <InputNumber
          min={1}
          value={text}
          onChange={(value) => handleQuantityChange(record._id, value)}
        />
      )
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text, record) => <p>Rs {record.price * record.quantity}</p>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="link" danger onClick={() => handleRemoveItem(record._id)}>
          <FaTrash />
        </Button>
      )
    }
  ];

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div className="cart-container">
      <Table
        dataSource={cartItems}
        columns={columns}
        rowKey="_id"
        pagination={false}
        className="cart-table"
      />
      <div className="cart-total">
        <h3>Total Price: Rs {calculateTotalPrice()}</h3>
        <Button type="primary" className="cart-pay-button">
          <Link to="/checkout">Pay</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
