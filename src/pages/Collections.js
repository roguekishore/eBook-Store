import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Collections.css';

// Placeholder image import (replace with actual imports)
import fiverings from '../images/fiverings.jpg'; 

const books = [
  { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", imageSrc: fiverings, price: 19.99, discount: 0.10 },
  { id: 2, title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance", imageSrc: fiverings, price: 29.99, discount: 0.15 },
  { id: 3, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", imageSrc: fiverings, price: 24.99, discount: 0.05 },
  { id: 4, title: "Atomic Habits", author: "James Clear", category: "Psychology", imageSrc: fiverings, price: 18.99, discount: 0.20 },
  { id: 5, title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", imageSrc: fiverings, price: 14.99, discount: 0.25 },
  { id: 6, title: "Beyond Good and Evil", author: "Friedrich Nietzsche", category: "Philosophy", imageSrc: fiverings, price: 16.99, discount: 0.10 },
  { id: 7, title: "Principles", author: "Ray Dalio", category: "Finance", imageSrc: fiverings, price: 35.99, discount: 0.05 },
  { id: 8, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Psychology", imageSrc: fiverings, price: 22.99, discount: 0.10 },
  { id: 9, title: "The Art of War", author: "Sun Tzu", category: "Philosophy", imageSrc: fiverings, price: 11.99, discount: 0.15 },
  { id: 10, title: "Grit", author: "Angela Duckworth", category: "Psychology", imageSrc: fiverings, price: 20.99, discount: 0.10 },
  { id: 11, title: "The Millionaire Next Door", author: "Thomas J. Stanley", category: "Finance", imageSrc: fiverings, price: 27.99, discount: 0.20 },
  { id: 12, title: "Start with Why", author: "Simon Sinek", category: "Finance", imageSrc: fiverings, price: 23.99, discount: 0.10 },
  { id: 13, title: "Man’s Search for Meaning", author: "Viktor E. Frankl", category: "Psychology", imageSrc: fiverings, price: 19.99, discount: 0.25 },
  { id: 14, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Psychology", imageSrc: fiverings, price: 21.99, discount: 0.15 },
  { id: 15, title: "The Wealth of Nations", author: "Adam Smith", category: "Finance", imageSrc: fiverings, price: 33.99, discount: 0.10 },
  { id: 16, title: "The Art of Happiness", author: "Dalai Lama", category: "Psychology", imageSrc: fiverings, price: 17.99, discount: 0.20 },
  { id: 17, title: "The Nicomachean Ethics", author: "Aristotle", category: "Philosophy", imageSrc: fiverings, price: 12.99, discount: 0.05 },
  { id: 18, title: "A Man for All Seasons", author: "Robert Bolt", category: "Philosophy", imageSrc: fiverings, price: 13.99, discount: 0.10 },
  { id: 19, title: "The 4-Hour Workweek", author: "Tim Ferriss", category: "Finance", imageSrc: fiverings, price: 29.99, discount: 0.15 },
  { id: 20, title: "Daring Greatly", author: "Brené Brown", category: "Psychology", imageSrc: fiverings, price: 22.99, discount: 0.10 }
];

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleBuyNow = (book) => {
    // Navigate to checkout page with book details
    navigate('/checkout', { state: { book } });
  };

  const handleAddToCart = (book) => {
    // Add book to cart logic (can be implemented later)
    console.log(`${book.title} added to cart.`);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="collections">
      <h1>Book Collections</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="book-catalog">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <img
              src={book.imageSrc}
              alt={book.title}
              className="book-image"
            />
            <div className="book-info">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">{book.author}</p>
              <p className="book-category">{book.category}</p>
              <p className="book-price">
                ${book.price.toFixed(2)} <span className="discount">(${(book.price * book.discount).toFixed(2)} off)</span>
              </p>
              <button className="buy-button" onClick={() => handleBuyNow(book)}>Buy Now</button>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
