import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';  // import useCart
import '../css/Cart.css';

const Cart = () => {
  const { cartItems } = useCart();  // get cartItems from context
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="add-to-cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className='empty'>Your cart is empty.</p>
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
        <>
          <div className="cart-total">
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
