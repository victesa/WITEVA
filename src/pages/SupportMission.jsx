import React, { useEffect } from 'react'; // Added useEffect
import { useLocation } from 'react-router-dom'; // Added useLocation
import { Heart, Users, Handshake, Send } from 'lucide-react';
import './SupportMission.css';
import Footer from '../components/Footer';

const SupportMission = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to the top every time the route changes to this page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div>
        <main className="support-page">
      <div className="support-container">
        
        {/* Header: The Vision */}
        <header className="support-header">
          <span className="support-tag">Get Involved</span>
          <h1>Empower the Hands that Harvest</h1>
          <p className="support-lead">
            WITEVA’s mission is sustained by a global community of advocates, 
            partners, and donors. Whether you offer time, expertise, or funding, 
            your contribution fuels institutional change in the tea sector.
          </p>
        </header>

        {/* The Pillars of Support */}
        <section className="support-pillars">
          <div className="pillar">
            <div className="pillar-icon"><Heart size={28} /></div>
            <h3>Financial Support</h3>
            <p>Invest in technical training, climate-smart equipment, and leadership programs for women smallholder farmers.</p>
          </div>

          <div className="pillar">
            <div className="pillar-icon"><Users size={28} /></div>
            <h3>Volunteering & Mentorship</h3>
            <p>Share your professional expertise in agronomy, business management, or digital literacy with our cooperatives.</p>
          </div>

          <div className="pillar">
            <div className="pillar-icon"><Handshake size={28} /></div>
            <h3>Strategic Partnership</h3>
            <p>Collaborate with us on policy advocacy, sustainable supply chain initiatives, or large-scale impact projects.</p>
          </div>
        </section>

        {/* The Action Area: The Contact Form */}
        <section className="support-form-section">
          <div className="form-card">
            <div className="form-intro">
              <h2>Express Your Interest</h2>
              <p>Tell us how you would like to contribute, and our team will reach out with more information on how to proceed.</p>
            </div>

            <form className="support-inquiry-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>Area of Support</label>
                <select required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="financial">Financial Contribution</option>
                  <option value="volunteering">Volunteering / Mentorship</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Tell us more</label>
                <textarea rows="5" placeholder="Briefly describe how you'd like to help..."></textarea>
              </div>

              <button type="submit" className="support-submit-btn">
                Send Expression of Interest <Send size={16} />
              </button>
            </form>
          </div>
        </section>

      </div>
    </main>

    <Footer/>
    </div>
  );
};

export default SupportMission;