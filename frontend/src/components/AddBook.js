import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddBook = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);

  const onFinish = async (values) => {
    await axios.post('http://localhost:3000/books', {
      name: String(values.name),
      author: String(values.author),
      description: String(values.description),
      price: Number(values.price),
      image: String(values.image),
      available: Boolean(checked),
    });

    navigate('/admin');
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 700, margin: '50px auto' }}
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Author" name="author">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Image" name="image">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Checkbox checked={checked} onChange={handleChange}>
          Available
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Add Book
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBook;
