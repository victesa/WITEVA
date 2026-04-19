import React from 'react';
import './WhoWeAre.css';
import whoweare from "../../assets/whoweare.png"

const WhoWeAre = () => {
  return (
    <section className="who-we-are" id="who-we-are">
      <div className="about-container">
        
        <div className="who-content-left">
          <span className="about-tag">Who we are</span>
          <h2>The National Platform for Women in Tea</h2>
          <p className="main-desc">
            WITEVA (Women in Tea Value Chain Association) is Kenya’s premier welfare 
            and advocacy organization dedicated to the women who drive the tea industry. 
            Founded in 2023 and registered under the Societies Act (Cap 108), we 
            represent thousands of women across 21 tea-growing counties.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <h4>Non-Political</h4>
              <p>WITEVA is a non-political organization focused strictly on the welfare and empowerment of women in the tea sector.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" />
                </svg>
              </div>
              <h4>Non-Profit</h4>
              <p>All funds are reinvested back into community programs, training, and advocacy to support our members.</p>
            </div>
          </div>

          {/* <button className="btn-join-mission">Join Our Mission</button> */}
        </div>

        <div className="who-content-right">
          <div className="about-image-wrapper">
            <img src={whoweare} alt="WITEVA Members" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;