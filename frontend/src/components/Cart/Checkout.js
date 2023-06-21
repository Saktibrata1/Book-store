import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'name'
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
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text, record) => <p>Rs {record.price * record.quantity}</p>
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
    <div className="checkout-container">
      <h2>Checkout</h2>
      <Table dataSource={cartItems} columns={columns} rowKey="_id" pagination={false} />
      <div className="checkout-total">
        <h3>Total Price: Rs {calculateTotalPrice()}</h3>
        <Button type="primary" className="checkout-proceed-button">
          <Link to="/customer-info">Proceed</Link>
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
