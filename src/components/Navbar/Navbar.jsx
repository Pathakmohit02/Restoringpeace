import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/logo.avif" alt="Restoring Peace Logo" className="logo-img" />
        </a>
        <div className={`nav-elements ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>HOME</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>ABOUT</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>SERVICES</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>THERAPY</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>PODCAST</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>SELF-ASSESSMENT</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>BLOG</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>UPCOMING</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>FAQ</a></li>
            <li className="nav-item"><a href="#" className="nav-links" onClick={toggleMenu}>CONTACT</a></li>
          </ul>
          <button className="book-session-btn" onClick={toggleMenu}>Book a session</button>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
