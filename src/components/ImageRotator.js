import React from 'react';
import '../css/ImageRotator.css';
import image1 from '../images/fiverings.jpg';
import image2 from '../images/fiverings.jpg';
import image3 from '../images/fiverings.jpg';
import image4 from '../images/fiverings.jpg';
import image5 from '../images/fiverings.jpg';
import image6 from '../images/fiverings.jpg';
import image7 from '../images/fiverings.jpg';
import image8 from '../images/fiverings.jpg';
import image9 from '../images/fiverings.jpg';
import image10 from '../images/fiverings.jpg';

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
