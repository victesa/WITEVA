import React from 'react';
import './ImpactMetrics.css';

const ImpactMetrics = () => {
  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        
        <header className="impact-stats-header">
          <div className="stats-pill">
            <span className="pill-icon">★</span> 2025 Impact Report
          </div>
          <h2 className="stats-main-title">Leading the Transformation in Tea</h2>
          <p className="stats-lead-text">
            WITEVA is proud to document a significant shift toward leadership and economic 
            stability within the sector. Our data reflects the growing influence of women 
            who are now steering the future of Kenya’s tea industry.
          </p>
        </header>

        <div className="stats-metrics-grid">
          <div className="stat-card">
            <span className="stat-value">12,500</span>
            <span className="stat-name">Women Empowered</span>
            <span className="stat-desc">Through specialized leadership training</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">47</span>
            <span className="stat-name">Active Communities</span>
            <span className="stat-desc">Thriving across 21 tea-growing regions</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">28</span>
            <span className="stat-name">Strategic Partners</span>
            <span className="stat-desc">Collaborating for industry-wide growth</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">85%</span>
            <span className="stat-name">Income Growth</span>
            <span className="stat-desc">Reported by our program participants</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactMetrics;