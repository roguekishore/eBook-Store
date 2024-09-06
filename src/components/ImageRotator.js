import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ImageRotator.css';
import image1 from '../images/books/Rich Dad Poor Dad.jpg';
import image2 from '../images/books/The Intelligent Investor.jpg';
import image3 from '../images/books/Thinking Fast and Slow.jpg';
import image4 from '../images/books/Atomic Habits.jpg';
import image5 from '../images/books/Meditations.jpg';
import image6 from '../images/books/Beyond Good and Evil.jpg';
import image7 from '../images/books/Principles.jpg';
import image8 from '../images/books/The subtle art of not giving a F..k.jpg';
import image9 from '../images/books/Sun Tzu -The art of War.jpg';
import image10 from '../images/books/Grit.jpg';

const books = [
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Finance', price: 9.99, imageSrc: image1 },
  { title: 'The Intelligent Investor', author: 'Benjamin Graham', category: 'Finance', price: 12.99, imageSrc: image2 },
  { title: 'Thinking Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', price: 14.99, imageSrc: image3 },
  { title: 'Atomic Habits', author: 'James Clear', category: 'Self-help', price: 11.99, imageSrc: image4 },
  { title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', price: 8.99, imageSrc: image5 },
  { title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', category: 'Philosophy', price: 10.99, imageSrc: image6 },
  { title: 'Principles', author: 'Ray Dalio', category: 'Business', price: 16.99, imageSrc: image7 },
  { title: 'The Subtle Art of Not Giving a F..k', author: 'Mark Manson', category: 'Self-help', price: 13.99, imageSrc: image8 },
  { title: 'The Art of War', author: 'Sun Tzu', category: 'Strategy', price: 7.99, imageSrc: image9 },
  { title: 'Grit', author: 'Angela Duckworth', category: 'Psychology', price: 15.99, imageSrc: image10 },
];

const ImageRotator = () => {
  const navigate = useNavigate();  

  const handleImageClick = (book) => {
    navigate('/checkout', { state: { book } });
  };

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': books.length }}>
        {books.map((book, index) => (
          <div 
            className="item" 
            style={{ '--position': index + 1 }} 
            key={index}
            onClick={() => handleImageClick(book)}  
          >
            <img src={book.imageSrc} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
