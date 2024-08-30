import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import '../css/DupNavBar.css';

const DupNavBar = () => {  
    const { cartItems } = useCart(); 
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setTime(timeString);
        };
        const timer = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(timer); 
    }, []);

    return (
        <nav className="nav">
            <div className="logo">
                <Link to="/">Readify</Link>
            </div>
            <div className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/cart">Cart {cartItems && `(${cartItems.length})`}</Link>
                <span className="time">{time}</span>
            </div>
        </nav>
    );
};

export default DupNavBar;
