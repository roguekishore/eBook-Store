import React from 'react';
import fiverings from '../images/fiverings.jpg'
import '../css/Catalog.css';

const Catalog = () => {
    const books = [
        {
            id: 1,
            title: "Book Title One",
            author: "Author Name",
            price: "$9.99",
            imageSrc: fiverings,
            altText: "Book 1 Cover"
        },

        {
            id: 1,
            title: "Book Title One",
            author: "Author Name",
            price: "$9.99",
            imageSrc: fiverings,
            altText: "Book 1 Cover"
        },

        {
            id: 1,
            title: "Book Title One",
            author: "Author Name",
            price: "$9.99",
            imageSrc: fiverings,
            altText: "Book 1 Cover"
        },
    ];

    return (
        <section className="catalog">
            {books.map((book) => (
                <article key={book.id} className="catalog-books">
                    <div className="catalog-image">
                        <img
                            src={book.imageSrc}
                            alt={book.altText}
                            className="catalog-book-image"
                        />
                    </div>
                    <div className="catalog-book-info">
                        <h2 className="catalog-book-title">{book.title}</h2>
                        <p className="catalog-book-author">{book.author}</p>
                        <div className="book-price">{book.price}</div>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Catalog;
