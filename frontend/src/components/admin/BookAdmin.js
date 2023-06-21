import { Button, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAdmin.css';

const BookAdmin = (props) => {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const [updatedBook, setUpdatedBook] = useState({
    name,
    author,
    description,
    price,
    image
  });

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:3000/books/${_id}`).then(() => {
      navigate('/');
    });
  };

  const updateHandler = async () => {
    try {
      await axios.put(`http://localhost:3000/books/${_id}`, updatedBook);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  return (
    
      <div className="card">
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <Input name="name" value={updatedBook.name} onChange={handleInputChange} />
        <Input name="author" value={updatedBook.author} onChange={handleInputChange} />
        <Input.TextArea
          name="description"
          value={updatedBook.description}
          onChange={handleInputChange}
        />
        <Input name="price" value={updatedBook.price} onChange={handleInputChange} />
        <Input name="image" value={updatedBook.image} onChange={handleInputChange} />
        <Button onClick={updateHandler} style={{ marginTop: 'auto' }}>
          Update
        </Button>
        <Button type="primary" danger onClick={deleteHandler} style={{ marginTop: 'auto' }}>
          Delete
        </Button>
      </div>
    
  );
};

export default BookAdmin;
