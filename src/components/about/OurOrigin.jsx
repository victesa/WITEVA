import React from 'react';
import './OurOrigin.css';
// import originImg from '../assets/origin-story.jpg';

const OurOrigin = () => {
  return (
    <section className="our-origin" id="our-origin">
      <div className="about-container origin-flex">
        
        {/* Left Column: Image */}
        <div className="origin-content-left">
          <div className="origin-image-wrapper">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQFSMy0b_q2pKQ/feedshare-shrink_1280/B4DZmHIE5FGsAs-/0/1758908668446?e=1778112000&v=beta&t=ktPbYrLfotEm9iRVGJH57igwAfMbuS544m73b0oE4vg" 
              alt="The history and origin of WITEVA" 
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="origin-content-right">
          <span className="about-tag">Our Origin</span>
          <h2>From Silence to Sanctuary</h2>
          <p className="main-desc">
            For decades, women have been the "hands that feed" the Kenyan tea sector, 
            yet their voices remained unheard. The turning point came in 2023, when 
            international investigations exposed the harsh realities of 
            Gender-Based Violence (GBV) and exploitation within tea estates.
          </p>
          <p className="main-desc">
            WITEVA was born in direct response to this crisis. We realized that 
            advocacy wasn't enough; women needed a formal, legal sanctuary and a 
            unified voice to demand safety, dignity, and fair treatment.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Dignified Safety</h4>
              <p>We exist because the safety of the woman in the field is just as important as the quality of the tea in the cup.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4>A Unified Voice</h4>
              <p>Providing a formal, legal platform for women to speak out and demand sector-wide reform.</p>
            </div>
          </div>

          <button className="btn-get-involved-alt">Get Involved</button>
        </div>

      </div>
    </section>
  );
};

export default OurOrigin;