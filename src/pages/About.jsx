import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import OurOrigin from '../components/about/OurOrigin';
import OurValues from '../components/about/OurValues';
import OurReach from '../components/about/OurReach';
import Leadership from '../components/about/Leadership';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <WhoWeAre />
      <OurOrigin/>
      <OurValues/>
      <OurReach/>
      <Leadership/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default About;