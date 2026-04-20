import React from 'react';
import './Footer.css';
import logo from "../assets/witeva_logo.jpg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Social */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="WITEVA Logo" className="logo-img" />
          </div>
          <p className="footer-text">
            Women in Tea Value Chain – promoting, protecting, and advocating for 
            gender inclusion across Kenya's tea industry.
          </p>
          
          {/* --- SOCIAL LINKS --- */}
          <div className="social-links">
            
            {/* Facebook */}
            <a href="#" className="social-icon-wrapper" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>

            {/* LinkedIn - NEW */}
            <a href="#" className="social-icon-wrapper" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
          </div>
          {/* ------------------- */}
          
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Programs</a></li>
            <li><a href="#">Impact & Stories</a></li>
            <li><a href="#">Support Us</a></li>
            <li><a href="#">News & Updates</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <p className="footer-text">Nairobi, Kenya<br/>Tea Board Building, 3rd Floor</p>
          </div>
          <div className="contact-item" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <span>Email: </span>
            <p className="footer-text">info@witeva.org</p>
          </div>
          <div className="contact-item" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <span>Telephone:</span>
            <p className="footer-text">+254 700 123 456</p>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p className="footer-text">Stay updated with our latest news and impact stories.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright-attribution">
            <p className="footer-text">© 2026 Women in Tea Value Chain (WITEVA). All rights reserved.</p>
            <p className="map-credit footer-text">Map Image provided by <a href="http://freevectormaps.com" target="_blank" rel="noopener noreferrer">Free Vector Maps</a></p>
          </div>
          
          <div className="footer-legal">
            <a href="#" className="footer-text">Privacy Policy</a>
            <a href="#" className="footer-text">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;