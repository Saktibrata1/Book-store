import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './ProductPlaced.css';

const ProductPlaced = () => {
  return (
    <div className="product-placed-container">
      <div className="product-placed-content">
        <div className="product-placed-icon">
          <MdCheckCircle />
        </div>
        <h2>ORDER PLACED SUCCESSFULLY</h2>
        <p>Thank you for your purchase!</p>
        <Button type="primary" shape="round" size="large" className="product-placed-button">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductPlaced;
