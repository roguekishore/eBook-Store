import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';
import { MdTablet } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';


import '../css/FloatingNavbar.css'

function FloatingNavbar() {
    const navigate = useNavigate(); // Use useNavigate hook to get navigate function

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <button className="nav-button" onClick={() => navigate('/home')}>
                        <AiOutlineHome size={24} color="#fff" className="icon" />
                        <span className="nav-label">Home</span>
                    </button>
                    <button className="nav-button" onClick={() => navigate('/books')}>
                        <FaBook size={24} color="#fff" className="icon" />
                        <span className="nav-label">Books</span>
                    </button>
                    <button className="nav-button" onClick={() => navigate('/cart')}>
                        <AiOutlineShoppingCart size={24} color="#fff" className="icon" />
                        <span className="nav-label">Cart</span>
                    </button>
                    <button className="nav-button" onClick={() => navigate('/checkout')}>
                        <FaShoppingBag size={24} color="#fff" className="icon" />
                        <span className="nav-label">Checkout</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default FloatingNavbar;