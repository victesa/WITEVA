import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <div className="about-page-container"> {/* New wrapper */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>
      {/* Your other content goes here */}
    </div>
  );
};

export default AboutHero;