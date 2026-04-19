import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <div className="cta-content">
          <span className="cta-overline">CALL TO ACTION</span>
          <h2>Stand with women across Kenya’s tea value chain</h2>
          <p>
            Your support helps expand training, strengthen advocacy, and protect 
            the rights and dignity of women working throughout the tea industry.
          </p>
        </div>

        <div className="cta-actions">
          <button className="btn-get-involved">GET INVOLVED</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;