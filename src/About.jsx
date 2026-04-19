import React from 'react';
import AboutHero from './components/about/AboutHero';
import WhoWeAre from './components/about/WhoWeAre';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <WhoWeAre />
    </div>
  );
};

export default About;