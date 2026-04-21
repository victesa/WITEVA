import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CTA from '../components/CTA'; 
import Footer from '../components/Footer';
import ChallengeApproach from '../components/work/ChallengeApproach';
import FeaturedInitiatives from '../components/work/FeaturedInitiatives';
import InitiativesGrid from '../components/work/InitiativesGrid';
import ProgrammesHero from '../components/work/ProgrammesHero';

const OurWork = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We wait for a very short moment (100ms) to ensure 
      // the DOM has finished laying out the components.
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // If no hash is present, always start at the very top
      window.scrollTo(0, 0);
    }
  }, [hash]); // This runs every time the URL hash changes

  return (
    <main className="work-page">
      <ProgrammesHero/>
      <ChallengeApproach/>
      <FeaturedInitiatives/>
      <InitiativesGrid/>
      <CTA />
      <Footer/>
    </main>
  );
};

export default OurWork;