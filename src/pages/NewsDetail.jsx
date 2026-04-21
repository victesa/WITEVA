import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, Calendar } from 'lucide-react';
import './NewsDetail.css';

const NewsDetail = () => {
  return (
    <article className="news-detail-page">
      {/* 1. Top Navigation & Breadcrumbs */}
      <nav className="article-nav">
        <div className="nav-container">
          <Link to="/impact" className="back-link">
            <ArrowLeft size={18} /> Back to Impact & News
          </Link>
          <div className="article-breadcrumbs">
            <span>Impact</span> / <span>Success Stories</span> / <span>Sustainable Farming</span>
          </div>
        </div>
      </nav>

      {/* 2. Article Header */}
      <header className="article-header">
        <div className="header-inner">
          <div className="article-meta-top">
            <span className="article-category">Success Story</span>
            <span className="read-time"><Clock size={14} /> 6 min read</span>
          </div>
          <h1 className="article-headline">
            Scaling Sustainable Farming: How 50 Women in Bomet Are Leading the Green Revolution
          </h1>
          <div className="article-author-bar">
            <div className="author-info">
              <span className="author-name">By WITEVA Communications Team</span>
              <span className="author-date"><Calendar size={14} /> April 21, 2026</span>
            </div>
            <button className="share-btn"><Share2 size={18} /> Share</button>
          </div>
        </div>
      </header>

      {/* 3. Featured Image (Edge-to-edge of the 92% container) */}
      <figure className="article-featured-image">
        <img 
          src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1400" 
          alt="Women farmers in Bomet county" 
        />
        <figcaption>WITEVA field officers conducting a workshop on soil health in Bomet County, March 2026.</figcaption>
      </figure>

      {/* 4. The Narrative Body (Narrow Column) */}
      <div className="article-body-container">
        <section className="article-content">
          <p className="lead-paragraph">
            What began as a pilot program for ten households has blossomed into a county-wide 
            movement. In Bomet, women are no longer just laborers in the tea fields; they 
            are the architects of a new, sustainable agricultural model.
          </p>

          <p>
            Agriculture remains the backbone of the Kenyan economy, yet for decades, 
            the voices of the women who do the majority of the work have been sidelined. 
            Through our 'Green Empowerment' initiative, we have seen a 40% increase 
            in crop yields among participating households.
          </p>

          <blockquote className="pull-quote">
            "We are not just growing tea anymore. We are growing a future where our 
            daughters can lead the cooperatives we only used to work for."
            <cite>— Beatrice Chepkemoi, Project Lead</cite>
          </blockquote>

          <h3>Implementing Regenerative Practices</h3>
          <p>
            The transition to organic fertilizers and water-saving irrigation techniques 
            has not only reduced costs by 15% but has also restored the local soil 
            quality, ensuring that the land remains productive for generations to come.
          </p>
          
          <p>
            Our commitment to transparency means we track these results monthly. 
            By the end of 2026, we aim to scale this model to three neighboring 
            counties, reaching an additional 500 women leaders.
          </p>
        </section>
      </div>

      {/* 5. Recirculation Section (More Stories) */}
      <footer className="article-footer">
        <div className="recirculation-container">
          <div className="recirculation-header">
            <h3>Continue Reading</h3>
            <Link to="/impact-news" className="view-all-link">View All Stories →</Link>
          </div>
          <div className="more-stories-grid">
            {/* These would be the standard 3-column news cards from the previous section */}
            <div className="placeholder-card">Related Story 1</div>
            <div className="placeholder-card">Related Story 2</div>
            <div className="placeholder-card">Related Story 3</div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default NewsDetail;