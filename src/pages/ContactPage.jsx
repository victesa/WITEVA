import React, { useEffect } from 'react'; // Added useEffect
import { useLocation } from 'react-router-dom'; // Added useLocation
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactPage.css';
import Footer from '../components/Footer';

const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Resets the scroll to the very top (0,0) as soon as the page loads
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div>
        <main className="contact-page">
      <div className="contact-container">
        
        <div className="contact-split">
          {/* Left: Institutional Info */}
          <div className="contact-info-block">
            <span className="info-pill">Connect With Us</span>
            <h1 className="contact-main-title">Partnering for a Better Tea Sector.</h1>
            <p className="contact-description">
              Reach out to our leadership team to discuss strategic partnerships, 
              media inquiries, or program details.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-circle"><MapPin size={20} /></div>
                <div className="text-box">
                  <label>Our Headquarters</label>
                  <p>WITEVA Plaza, 3rd Floor, Nandi Hills, Kenya</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-circle"><Mail size={20} /></div>
                <div className="text-box">
                  <label>Email Address</label>
                  <p>partnerships@witeva.org</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-circle"><Phone size={20} /></div>
                <div className="text-box">
                  <label>Phone Coordination</label>
                  <p>+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Clean Card */}
          <div className="contact-card-wrapper">
            <div className="contact-card">
              <div className="card-inner">
                <h2>Send an Official Inquiry</h2>
                <form className="refined-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input type="email" placeholder="email@address.com" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Inquiry Type</label>
                    <select>
                      <option>Strategic Partnership</option>
                      <option>Media & Press</option>
                      <option>Program Support</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Your Message</label>
                    <textarea rows="5" placeholder="How can we help?"></textarea>
                  </div>

                  <button type="submit" className="witeva-submit-btn">
                    Submit Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer/>
    </div>
  );
};

export default ContactPage;