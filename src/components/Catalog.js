 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { FaSearch } from 'react-icons/fa';
 import { useCart } from '../CartContext';  // import useCart
 import '../css/Catalog.css';
 
 // Import images
 import ric from '../images/books/Rich Dad Poor Dad.jpg';
 import int from '../images/books/The Intelligent Investor.jpg';
 import thi from '../images/books/Thinking Fast and Slow.jpg';
 import ato from '../images/books/Atomic Habits.jpg';
 import med from '../images/books/Meditations.jpg';
 import bey from '../images/books/Beyond Good and Evil.jpg';
 import pri from '../images/books/Principles.jpg';
 import the from '../images/books/The subtle art of not giving a F..k.jpg';
 import art from '../images/books/Sun Tzu -The art of War.jpg';
 import gri from '../images/books/Grit.jpg';
 import mil from '../images/books/The Millionare Next Door.jpg';
 import sta from '../images/books/Start With Why.jpg';
 import man from '../images/books/Man\'s Search for Meaning.jpg';
 import hab from '../images/books/The 7 Habits of Highly Effective People.jpg';
 import wea from '../images/books/The Wealth of Nations.jpg';
 import hap from '../images/books/The art of Happiness.jpg';
 import nic from '../images/books/Nicomachean Ethics.jpg';
 import sea from '../images/books/A man for all seasons.jpg';
 import hou from '../images/books/The 4 Hour body.jpg';
 import dar from '../images/books/Daring Greatly.jpg';
 
 const books = [
     { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", imageSrc: ric, price: 19.99, discount: 0.10 },
     { id: 2, title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance", imageSrc: int, price: 29.99, discount: 0.15 },
     { id: 3, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", imageSrc: thi, price: 24.99, discount: 0.05 },
     { id: 4, title: "Atomic Habits", author: "James Clear", category: "Psychology", imageSrc: ato, price: 18.99, discount: 0.20 },
     { id: 5, title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", imageSrc: med, price: 14.99, discount: 0.25 },
     { id: 6, title: "Beyond Good and Evil", author: "Friedrich Nietzsche", category: "Philosophy", imageSrc: bey, price: 16.99, discount: 0.10 },
     { id: 7, title: "Principles", author: "Ray Dalio", category: "Finance", imageSrc: pri, price: 35.99, discount: 0.05 },
     { id: 8, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Psychology", imageSrc: the, price: 22.99, discount: 0.10 },
     { id: 9, title: "The Art of War", author: "Sun Tzu", category: "Philosophy", imageSrc: art, price: 11.99, discount: 0.15 },
     { id: 10, title: "Grit", author: "Angela Duckworth", category: "Psychology", imageSrc: gri, price: 20.99, discount: 0.10 },
     { id: 11, title: "The Millionaire Next Door", author: "Thomas J. Stanley", category: "Finance", imageSrc: mil, price: 27.99, discount: 0.20 },
     { id: 12, title: "Start with Why", author: "Simon Sinek", category: "Finance", imageSrc: sta, price: 23.99, discount: 0.10 },
     { id: 13, title: "Man’s Search for Meaning", author: "Viktor E. Frankl", category: "Psychology", imageSrc: man, price: 19.99, discount: 0.25 },
     { id: 14, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Psychology", imageSrc: hab, price: 21.99, discount: 0.15 },
     { id: 15, title: "The Wealth of Nations", author: "Adam Smith", category: "Finance", imageSrc: wea, price: 33.99, discount: 0.10 },
     { id: 16, title: "The Art of Happiness", author: "Dalai Lama", category: "Psychology", imageSrc: hap, price: 17.99, discount: 0.20 },
     { id: 17, title: "The Nicomachean Ethics", author: "Aristotle", category: "Philosophy", imageSrc: nic, price: 12.99, discount: 0.05 },
     { id: 18, title: "A Man for All Seasons", author: "Robert Bolt", category: "Philosophy", imageSrc: sea, price: 13.99, discount: 0.10 },
     { id: 19, title: "The 4-Hour Workweek", author: "Tim Ferriss", category: "Finance", imageSrc: hou, price: 29.99, discount: 0.15 },
     { id: 20, title: "Daring Greatly", author: "Brené Brown", category: "Psychology", imageSrc: dar, price: 22.99, discount: 0.10 }
 ];
 
 const Catalog = () => {
     
     const [searchTerm, setSearchTerm] = useState('');
     const navigate = useNavigate();
     const { addToCart } = useCart();  // Get addToCart function from context
 
     const handleSearchChange = (e) => {
         setSearchTerm(e.target.value.toLowerCase());
     };
 
     const handleBuyNow = (book) => {
         navigate('/checkout', { state: { book } });
     };
 
     const handleAddToCart = (book) => {
         addToCart(book);  // Add the book to the cart
     };
 
     const filteredBooks = books.filter(book =>
         book.title.toLowerCase().includes(searchTerm) ||
         book.author.toLowerCase().includes(searchTerm) ||
         book.category.toLowerCase().includes(searchTerm)
     );
 
     return (
         <div className='Catalog'>
             <h1>Book Collections</h1>
             <div className="search-box">
                 <FaSearch className="search-icon" />
                 <input
                     type="text"
                     placeholder="Search for books"
                     value={searchTerm}
                     onChange={handleSearchChange}
                     className="search-input"
                 />
             </div>
             <section className="catalog">
                 {filteredBooks.map((book) => (
                     <article key={book.id} className="catalog-books">
                         <div className="catalog-image">
                             <img
                                 src={book.imageSrc}
                                 alt={book.title}
                                 className="catalog-book-image"
                             />
                         </div>
                         <div className="catalog-book-info">
                             <h2 className="catalog-book-title">{book.title}</h2>
                             <p className="catalog-book-author">{book.author}</p>
                             <p className="book-category">{book.category}</p>
                             <p className="book-price">
                                 ${book.price.toFixed(2)} <span className="discount">(${(book.price * book.discount).toFixed(2)} off)</span>
                             </p>
                             <button className="buy-button" onClick={() => handleBuyNow(book)}>Buy Now</button>
                             <button className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Add to Cart</button>
                         </div>
                     </article>
                 ))}
             </section>
         </div>
     );
 }

 export default Catalog;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import { useCart } from '../CartContext';
// import '../css/Catalog.css';
// import ric from '../images/books/Rich Dad Poor Dad.jpg';
// import int from '../images/books/The Intelligent Investor.jpg';
// import thi from '../images/books/Thinking Fast and Slow.jpg';
// import ato from '../images/books/Atomic Habits.jpg';
// import med from '../images/books/Meditations.jpg';
// import bey from '../images/books/Beyond Good and Evil.jpg';
// import pri from '../images/books/Principles.jpg';
// import the from '../images/books/The subtle art of not giving a F..k.jpg';
// import art from '../images/books/Sun Tzu -The art of War.jpg';
// import gri from '../images/books/Grit.jpg';
// import mil from '../images/books/The Millionare Next Door.jpg';
// import sta from '../images/books/Start With Why.jpg';
// import man from '../images/books/Man\'s Search for Meaning.jpg';
// import hab from '../images/books/The 7 Habits of Highly Effective People.jpg';
// import wea from '../images/books/The Wealth of Nations.jpg';
// import hap from '../images/books/The art of Happiness.jpg';
// import nic from '../images/books/Nicomachean Ethics.jpg';
// import sea from '../images/books/A man for all seasons.jpg';
// import hou from '../images/books/The 4 Hour body.jpg';
// import dar from '../images/books/Daring Greatly.jpg';
// import axios from 'axios';

// const imageMapping = {
//     "Rich Dad Poor Dad": ric,
//     "The Intelligent Investor": int,
//     "Thinking, Fast and Slow": thi,
//     "Atomic Habits": ato,
//     "Meditations": med,
//     "Beyond Good and Evil": bey,
//     "Principles": pri,
//     "The Subtle Art of Not Giving a F*ck": the,
//     "The Art of War": art,
//     "Grit": gri,
//     "The Millionaire Next Door": mil,
//     "Start with Why": sta,
//     "Man’s Search for Meaning": man,
//     "The 7 Habits of Highly Effective People": hab,
//     "The Wealth of Nations": wea,
//     "The Art of Happiness": hap,
//     "The Nicomachean Ethics": nic,
//     "A Man for All Seasons": sea,
//     "The 4-Hour Workweek": hou,
//     "Daring Greatly": dar
// };

// const Catalog = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [books, setBooks] = useState([]);
//     const navigate = useNavigate();
//     const { addToCart } = useCart();

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('/data/books.json');
                
//                 const booksWithImages = response.data.map(book => ({
//                     ...book,
//                     imageSrc: imageMapping[book.title]
//                 }));
//                 setBooks(booksWithImages);
//             } catch (error) {
//                 console.error("Error fetching book data:", error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value.toLowerCase());
//     };

//     const handleBuyNow = (book) => {
//         navigate('/checkout', { state: { book } });
//     };

//     const handleAddToCart = (book) => {
//         addToCart(book);
//         alert(`${book.title} has been added to your cart!`);
//     };

//     const filteredBooks = books.filter(book =>
//         book.title.toLowerCase().includes(searchTerm) ||
//         book.author.toLowerCase().includes(searchTerm) ||
//         book.category.toLowerCase().includes(searchTerm)
//     );

//     return (
//         <div className='Catalog'>
//             <h1>Book Collections</h1>
//             <div className="search-box">
//                 <FaSearch className="search-icon" />
//                 <input
//                     type="text"
//                     placeholder="Search for books"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className="search-input"
//                 />
//             </div>
//             <section className="catalog">
//                 {filteredBooks.map((book) => (
//                     <article key={book.id} className="catalog-books">
//                         <div className="catalog-image">
//                             <img
//                                 src={book.imageSrc}
//                                 alt={book.title}
//                                 className="catalog-book-image"
//                             />
//                         </div>
//                         <div className="catalog-book-info">
//                             <h2 className="catalog-book-title">{book.title}</h2>
//                             <p className="catalog-book-author">{book.author}</p>
//                             <p className="book-category">{book.category}</p>
//                             <p className="book-price">
//                                 ${book.price.toFixed(2)} <span className="discount">(${(book.price * book.discount).toFixed(2)} off)</span>
//                             </p>
//                             <button className="buy-button" onClick={() => handleBuyNow(book)}>Buy Now</button>
//                             <button className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Add to Cart</button>
//                         </div>
//                     </article>
//                 ))}
//             </section>
//         </div>
//     );
// };

// export default Catalog;
