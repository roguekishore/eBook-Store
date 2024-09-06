import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../CartContext';  
import newBook from '../images/monk.webp'; 
import '../css/NewBook.css';

const NewBook = () => {
  const navigate = useNavigate();  
  const { addToCart } = useCart();  

  const bookDetails = {
    title: 'The Monk Who Sold His Ferrari',
    author: 'Robin Sharma',
    category: 'Self-help',
    price: 6.75,
    imageSrc: newBook
  };

 
  const handlePurchase = () => {
    navigate('/checkout', { state: { book: bookDetails } });  
  };

  const handleAddToCart = () => {
    addToCart(bookDetails);  
    alert(`${bookDetails.title} has been added to your cart!`);
  };

  return (
    <main className="new-book">
      <section className="new-book-release">
        <div className="new-book-info">
          <h2>New Release</h2>
          <h1>{bookDetails.title}</h1>
          <p>
            "The Monk Who Sold His Ferrari" is a self-help book by Robin Sharma that tells the story of Julian Mantle, a high-powered lawyer who embarks on a journey of self-discovery after a health crisis. The book uses a fictional narrative to impart life lessons, focusing on themes like the importance of balance, mindfulness, and personal fulfillment. Through his spiritual awakening, Julian learns valuable principles from a group of monks in the Himalayas, which he then shares, offering readers practical insights on how to lead a more meaningful and purpose-driven life.
          </p>
          <div className="new-book-buttons">
         
            <button onClick={handlePurchase} className="purchase-btn">$6.75 – Purchase</button>

            <button onClick={handleAddToCart} className="kindle-btn">ADD TO CART</button>
          </div>
        </div>
        <div className="new-book-image">
          <div className="image-container">
            <img src={newBook} alt={bookDetails.title} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewBook;
