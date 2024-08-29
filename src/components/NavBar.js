import React, { useEffect, useState } from 'react';
import '../css/NavBar.css';

const NavBar = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setTime(timeString);
        };
        const timer = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <nav className="nav">
            <div className="logo">
                <a href="#">Readify</a>
            </div>
            <div className="nav-links">
                <a href="#">STUDIO</a>
                <a href="#">ABOUT ME</a>
                <a href="#">{time}</a>
            </div>
        </nav>
    );
};

export default NavBar;
