import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link and useNavigate
import './Navbar.css';
import logo from "../assets/witeva_logo.jpg"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to handle navigation and close the mobile menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Closes the menu on mobile after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="WITEVA Logo" />
        <Link to="/">WITEVA</Link> 
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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)} 
          >
            <Link to="/about-us" className="dropdown-toggle" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                {/* Note: Standard anchor tags are fine for hashes, but Link is better for paths */}
                <li><a href="/about-us#who-we-are">Who we are</a></li>
                <li><a href="/about-us#our-origin">Our Origin</a></li>
                <li><a href="/about-us#values">Mission & Values</a></li>
                <li><a href="/about-us#counties">Our Reach</a></li>
                <li><a href="/about-us#leadership">Our Leadership</a></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/our-work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link></li>
          <li><Link to="/impact-news" onClick={() => setIsMobileMenuOpen(false)}>Impact & News</Link></li>
          <li><Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <div className="navbar-action">
          {/* Functional Support Mission Button */}
          <button 
            className="btn-support" 
            onClick={() => handleNavigation('/support-mission')}
          >
            Support the Mission
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;