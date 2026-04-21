import React from 'react';
/* We will create these components in the next steps */

import './ImpactNews.css';
import ImpactHero from '../components/impact/ImpactHero';
import ImpactMetrics from '../components/impact/ImpactMetrics';
import FeaturedStory from '../components/impact/FeaturedStory';
import UnifiedNewsFeed from '../components/impact/UnifiedNewsFeed';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import AnnualReports from '../components/impact/AnnualReports';

const ImpactNews = () => {
  return (
    <main className="impact-news-page">
      {/* Section 1: The Narrative Hook */}
      <ImpactHero />

      {/* Section 2: The Data Dashboard (The "Orchestra") */}
      <ImpactMetrics/>
      {/* Section 3: The Headliner (One deep-dive story) */}
      <section className="featured-story-wrapper">
        {/* <FeaturedStory /> */}
        <FeaturedStory/>
      </section>

      {/* Section 4: The Unified Feed & Pagination */}
      <section className="news-feed-wrapper">
        {/* <UnifiedNewsFeed /> */}
        <UnifiedNewsFeed/>
      </section>

      <AnnualReports/>

      <CTA/>

      <Footer/>
    </main>
  );
};

export default ImpactNews;