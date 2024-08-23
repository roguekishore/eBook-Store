import React from 'react';
import newBook from '../images/monk.webp'
import '../css/NewBook.css';

const NewBook = () => {
  return (
    <main className="new-book">
      <section className="new-book-release">
        <div className="new-book-info">
          <h2>New Release</h2>
          <h1>This Dark Road to Mercy</h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div className="new-book-buttons">
            <a href="#" className="purchase-btn">$6.75 – Purchase</a>
            <a href="#" className="kindle-btn">READ ON KINDLE</a>
          </div>
        </div>
        <div className="new-book-image">
          <img src={newBook} alt="This Dark Road to Mercy" />
        </div>
      </section>
    </main>
  );
};

export default NewBook;
