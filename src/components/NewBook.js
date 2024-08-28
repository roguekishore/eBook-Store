import React from 'react';
import newBook from '../images/monk.webp'; // Adjust the path if necessary
import '../css/NewBook.css';

const NewBook = () => {
  return (
    <main className="new-book">
      <section className="new-book-release">
        <div className="new-book-info">
          <h2>New Release</h2>
          <h1>This Dark Road to Mercy</h1>
          <p>
            "The Monk Who Sold His Ferrari" is a self-help book by Robin Sharma that tells the story of Julian Mantle, a high-powered lawyer who embarks on a journey of self-discovery after a health crisis. The book uses a fictional narrative to impart life lessons, focusing on themes like the importance of balance, mindfulness, and personal fulfillment. Through his spiritual awakening, Julian learns valuable principles from a group of monks in the Himalayas, which he then shares, offering readers practical insights on how to lead a more meaningful and purpose-driven life.
          </p>
          <div className="new-book-buttons">
            <a href="#" className="purchase-btn">$6.75 – Purchase</a>
            <a href="#" className="kindle-btn">READ ON KINDLE</a>
          </div>
        </div>
        <div className="new-book-image">
          <div className="image-container">
            <img src={newBook} alt="This Dark Road to Mercy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewBook;
