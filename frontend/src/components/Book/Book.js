import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Book.css';

const Book = (props) => {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  

  const addToCartHandler = () => {
    // Perform any necessary actions to add the book to the cart
    // For now, let's assume the book details are stored in localStorage
    const cartItem = {
      _id,
      name,
      author,
      description,
      price,
      image
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Navigate to the Cart page
    navigate('/cart');
  };

  return (
    
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      
      
      <Button
        type="primary"
        shape="circle"
        icon={<FaShoppingCart />}
        onClick={addToCartHandler}
        style={{ marginTop: 'auto' }}
      />
    </div>
    
  );
};

export default Book;
