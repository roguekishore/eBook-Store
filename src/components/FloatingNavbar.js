import React from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';
import { MdTablet } from 'react-icons/md';
import '../css/FloatingNavbar.css'

function FloatingNavbar() {
    return(
        <div>
           <nav className="navbar">
            <div className="navbar-container">
                <button className="nav-button">
                    <AiOutlineHome size={24} color="#fff" className="icon" />
                    <span className="nav-label">Home</span>
                </button>
                <button className="nav-button">
                    <FaBook size={24} color="#fff" className="icon" />
                    <span className="nav-label">Books</span>
                </button>
                <button className="nav-button">
                    <AiOutlineShoppingCart size={24} color="#fff" className="icon" />
                    <span className="nav-label">Cart</span>
                </button>
                <button className="nav-button">
                    <MdTablet size={24} color="#fff" className="icon" />
                    <span className="nav-label">Tablet</span>
                </button>
            </div>
        </nav>
        </div>
    )
}

export default FloatingNavbar;