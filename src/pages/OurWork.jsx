import CTA from '../components/CTA'; 
import Footer from '../components/Footer';
import ChallengeApproach from '../components/work/ChallengeApproach';
import FeaturedInitiatives from '../components/work/FeaturedInitiatives';
import InitiativesGrid from '../components/work/InitiativesGrid';
import ProgrammesHero from '../components/work/ProgrammesHero';

const OurWork = () => {

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