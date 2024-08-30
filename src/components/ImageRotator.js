import React from 'react';
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

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
];

const ImageRotator = () => {
  return (
    <div className="banner">
      {/* <div className="background-text">
        <h1>Discover Your Next Favorite Ebook</h1>
        
      </div> */}
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((image, index) => (
          <div className="item" style={{ '--position': index + 1 }} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
