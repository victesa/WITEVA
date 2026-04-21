import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedStory.css';

const FeaturedStory = () => {
  return (
    <section className="featured-story-section">
      <div className="featured-container">
        
        <Link to="/impact/sustainable-cooperatives-2026" className="featured-card">
          <div className="featured-image-side">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
              alt="Women leaders in a tea cooperative meeting" 
            />
            <div className="featured-tag">Latest Success</div>
          </div>

          <div className="featured-content-side">
            <span className="featured-date">April 15, 2026</span>
            <h2 className="featured-headline">
              From Field to Boardroom: The Rise of Women-Led Cooperatives in Nandi County
            </h2>
            <p className="featured-excerpt">
              In a historic shift for the region, three major tea cooperatives have 
              elected women as chairpersons for the first time. This milestone follows 
              our year-long 'Leadership in Agriculture' initiative, proving that when 
              barriers are removed, excellence follows.
            </p>
            <div className="featured-footer">
              <span className="read-more-btn">Read the Impact Case Study →</span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default FeaturedStory;