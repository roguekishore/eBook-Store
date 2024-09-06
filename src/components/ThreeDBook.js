import React from 'react';
import '../css/ThreeDBook.css';
import batman from '../images/batman.jpg';
import batmantitle from '../images/batmantitle1.png';
import batmanchar from '../images/batmanchar.png';

import starwars from '../images/darthvader.jpg'
import starwarstitle from '../images/str.png'
import starwarschar from '../images/vaderor.png'

import ironman from '../images/ironman.jpg'
import ironmanchar from '../images/ironmanchar.png'
import ironmantitle from '../images/ironmantitle.png'

const ThreeDBook = () => {
  return (
    <div className="bestseller-section">
      <h2 className="section-heading">The Best-Sellers!</h2>
      <p className="section-description">
        Dive into our most popular titles! These books have captivated the attention of our readers, 
        offering gripping stories, insightful knowledge, and unforgettable characters. Check out our bestsellers 
        and find your next great read today!
      </p>
    <div className="card-container">
        <div className="threecard">
          <div className="wrapper">
            <img src={starwars} alt="Cover" className="cover-image" />
          </div>
          <img src={starwarstitle} alt="Title" className="startitle" />
          <img src={starwarschar} alt="Character" className="darthcharacter" />
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
            <img src={ironman} alt="Cover" className="cover-image" />
          </div>
          <img src={ironmantitle} className="irontitle" />
          <img src={ironmanchar} alt="Character" className="character" />
        </div>
    
    </div>
    </div>
  );
};

export default ThreeDBook;
