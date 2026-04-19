import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">WITEVA</a>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span className="icon-close">&times;</span>
        ) : (
          <span className="icon-hamburger">&#9776;</span>
        )}
      </div>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            // On mobile, this toggles the menu visibility
            onClick={() => setDropdownOpen(!dropdownOpen)} 
          >
            {/* FIXED: Changed from button to anchor tag */}
            <a href="/about-us" className="dropdown-toggle">
              Who We Are
            </a>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                {/* FIXED: Added the #who-we-are anchor tag */}
                <li><a href="/about-us#who-we-are">Our Story</a></li>
                <li><a href="/mission-values">Mission & Values</a></li>
                <li><a href="/leadership">Our Leadership</a></li>
                <li><a href="/reach">Reach</a></li>
              </ul>
            )}
          </li>
          <li><a href="/our-work">Our Work</a></li>
          <li><a href="/impact-news">Impact & News</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div className="navbar-action">
          <button className="btn-support">Support the Mission</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;