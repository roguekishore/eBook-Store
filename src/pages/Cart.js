import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

// Example cart data (you would typically get this from a global state or context)
const cartItems = [
  {
    id: 1,
    title: 'Book Title One',
    author: 'Author Name',
    price: 9.99,
    imageSrc: '../images/fiverings.jpg'
  },
  {
    id: 2,
    title: 'Book Title Two',
    author: 'Author Name',
    price: 12.99,
    imageSrc: '../images/fiverings.jpg'
  },
  // Add more items as needed
];

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="add-to-cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageSrc} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-author">by {item.author}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
