import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CustomerInfo.css';

const CustomerInfo = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:3000/placeOrder', values);
      navigate('/product-placed');
    } catch (error) {
      console.log('Failed to place order:', error);
    }
  };

  return (
    <div className="customer-info-container">
      <h2>Customer Information</h2>
      <Form form={form} name="customer-info-form" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="place-order-button">
            Place your order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomerInfo;
