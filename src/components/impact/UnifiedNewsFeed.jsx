import React from 'react';
import { Link } from 'react-router-dom';
import './UnifiedNewsFeed.css';

const UnifiedNewsFeed = () => {
  // This would be populated via your CMS
  const newsItems = [
    {
      id: 1,
      tag: "Impact Story",
      date: "March 28, 2026",
      title: "Sustainable Farming: How 50 Women in Bomet Diversified Their Income",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      link: "/impact/sustainable-farming-bomet"
    },
    {
      id: 2,
      tag: "News & Events",
      date: "March 15, 2026",
      title: "WITEVA Annual Stakeholder Forum: Setting the 2027 Advocacy Agenda",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      link: "/news/stakeholder-forum-2026"
    },
    {
      id: 3,
      tag: "Report",
      date: "March 02, 2026",
      title: "Q1 Progress Update: Safe Spaces Initiative Sees 40% Increase in Usage",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      link: "/impact/q1-safe-spaces-report"
    }
  ];

  return (
    <section className="news-feed-section">
      <div className="news-feed-container">
        
        {/* Added Section Header */}
        <header className="feed-header">
          <div className="header-text">
            <h2>All Updates & Impact Reports</h2>
            <p>Chronological documentation of our progress and field activities.</p>
          </div>
          <div className="results-count">
            Showing <strong>124</strong> Stories
          </div>
        </header>

        <div className="news-grid">
          {newsItems.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="news-card">
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-card-body">
                <div className="news-card-meta">
                  <span className="news-tag">{item.tag}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="news-card-link">Read Story →</span>
              </div>
            </Link>
          ))}
        </div>

        <nav className="pagination-wrapper">
          <button className="page-arrow" disabled>← Previous</button>
          <div className="page-numbers">
            <button className="page-num active">1</button>
            <button className="page-num">2</button>
            <button className="page-num">3</button>
            <span className="page-dots">...</span>
            <button className="page-num">12</button>
          </div>
          <button className="page-arrow">Next →</button>
        </nav>

      </div>
    </section>
  );
};

export default UnifiedNewsFeed;