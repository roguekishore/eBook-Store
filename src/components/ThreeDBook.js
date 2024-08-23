import React from 'react';
import '../css/ThreeDBook.css';
import batman from '../images/batman.jpg';
import batmantitle from '../images/batmantitle1.png';
import batmanchar from '../images/batmanchar.png';

const ThreeDBook = () => {
  return (
    <div className="card-container">
        <div className="threecard">
          <div className="wrapper">
            <img src={batman} alt="Cover" className="cover-image" />
          </div>
          <img src={batmantitle} alt="Title" className="title" />
          <img src={batmanchar} alt="Character" className="character" />
        </div>


        <div className="threecard">
          <div className="wrapper">
            <img src={batman} alt="Cover" className="cover-image" />
          </div>
          <img src={batmantitle} alt="Title" className="title" />
          <img src={batmanchar} alt="Character" className="character" />
        </div>


        <div className="threecard">
          <div className="wrapper">
            <img src={batman} alt="Cover" className="cover-image" />
          </div>
          <img src={batmantitle} alt="Title" className="title" />
          <img src={batmanchar} alt="Character" className="character" />
        </div>
    
    </div>
  );
};

export default ThreeDBook;
