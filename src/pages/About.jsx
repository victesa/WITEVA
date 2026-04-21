import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import OurOrigin from '../components/about/OurOrigin';
import OurValues from '../components/about/OurValues';
import OurReach from '../components/about/OurReach';
import Leadership from '../components/about/Leadership';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const About = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // SCENARIO: User clicked "The 21 Counties" (#counties)
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // We wait 100ms to ensure the page has rendered the sections
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // SCENARIO: User clicked "Our Story" (No hash)
      // This resets the scroll to the absolute top of the page
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]); // Re-runs every time you navigate to this page

  return (
    <div className="about-page">
      <AboutHero />
      <WhoWeAre />
      <OurOrigin/>
      <OurValues/>
      {/* IMPORTANT: Ensure the OurReach component has id="counties" 
         inside its own file! 
      */}
      <OurReach/>
      <Leadership/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default About;