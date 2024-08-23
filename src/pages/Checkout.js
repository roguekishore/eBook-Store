import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Checkout.css';

const Checkout = () => {
  const { state } = useLocation();
  const book = state?.book;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Form submitted!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {book && (
        <div className="checkout-details">
          <img src={book.imageSrc} alt={book.title} className="book-image" />
          <div className="book-info">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
          </div>
        </div>
      )}
      <div className="customer-form">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" name="payment" required>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          <button type="submit">Submit Order</button>
        </form>
        </div>
        </div>
        )
    }

export default Checkout;
     
