import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Style</h2>
          <p>
            Subscribe Easy Tutorials Youtube channel to watch more videos on website development and press the bell icon to get immediate notification of latest videos.
          </p>
        </div>
        <div className="footer-section">
          <h3>Office</h3>
          <p>
            ITPL Road <br />
            Whitefield, Bangalore <br />
            Karnataka, PIN 560066, <br />
            India
          </p>
          <p>avinashdm@outlook.com</p>
          <p>+91 - 0123456789</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email id" />
            <button type="submit">→</button>
          </form>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#whatsapp"><i className="fab fa-whatsapp"></i></a>
            <a href="#pinterest"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Easy Tutorials © 2021 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
