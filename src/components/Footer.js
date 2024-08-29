// Footer.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import '../css/Footer.css'; // Make sure to create and import this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <h2>Get in touch.</h2>
                    <div className="footer-icons">
                        <a href="mailto:info@example.com" className="footer-icon">
                            <FaEnvelope />
                        </a>
                        <a href="https://linkedin.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://discord.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>
                <div className="footer-bottom">
                    <p>Designed and engineered by Kishore.</p>
                    <p>Built with React, HTML, CSS, and JavaScript.</p>
                    <p>© 2024 Kishore. Last updated August '24.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
