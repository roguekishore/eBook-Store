import React from 'react';
import { FaUser, FaShoppingBag } from 'react-icons/fa'; 
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>READIFY</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Reader</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
        <div className="nav-icons">
          <a href="#"><FaUser /></a>
          <a href="#"><FaShoppingBag /></a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
