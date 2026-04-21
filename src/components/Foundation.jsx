import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Foundation.css';

const Foundation = () => {
  const navigate = useNavigate();

  return (
    <section className="foundation-section">
      <div className="foundation-container">
        
        <h2 className="foundation-main-title">THE FOUNDATION</h2>

        {/* Mission & Vision Cards */}
        <div className="foundation-cards">
          <div className="f-card">
            <div className="f-card-header">
              <h3>MISSION</h3>
              <svg className="f-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            <p>To empower women in the tea sector through Capacity Building, Advocacy and Livelihood Strengthening</p>
          </div>

          <div className="f-card">
            <div className="f-card-header">
              <h3>VISION</h3>
              <svg className="f-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,22V20C2,20 7,18 12,18C17,18 22,20 22,20V22H2M11.3,14.1L9,16L9.8,13L7.4,11.1L10.3,11.1L11.3,8.1L12.3,11.1L15.2,11.1L12.8,13L13.6,16L11.3,14.1Z" />
              </svg>
            </div>
            <p>To achieve Sustainable Inclusion and Social Equity in the Tea Sector</p>
          </div>
        </div>

        {/* Top Buttons */}
        <div className="foundation-actions">
          {/* Navigates to the top of About Us */}
          <button className="btn-story" onClick={() => navigate('/about-us')}>
            Our Story
          </button>
          
          {/* Navigates to About Us and tells it to scroll to #counties */}
          <button className="btn-counties" onClick={() => navigate('/about-us#counties')}>
            The 19 Counties
          </button>
        </div>

        {/* Video / Feature Image Block */}
        <div className="video-feature-wrapper">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D22AQFSMy0b_q2pKQ/feedshare-shrink_1280/B4DZmHIE5FGsAs-/0/1758908668446?e=1778112000&v=beta&t=ktPbYrLfotEm9iRVGJH57igwAfMbuS544m73b0oE4vg" 
            alt="Tea Plantation Leader" 
            className="video-thumb"
          />
          
          {/* YouTube Play Button: External Link */}
          <a 
            href="https://www.youtube.com/@YourWitevaChannel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="play-button-overlay"
          >
            <div className="play-circle">
              <div className="play-triangle"></div>
            </div>
          </a>

          <div className="video-caption">
            Beatrice Tonui | ChairLady
          </div>
        </div>

        {/* Final Bottom Action */}
        <div className="learn-more-container">
          <button className="btn-learn-more" onClick={() => navigate('/our-work')}>
            LEARN MORE <span>&rsaquo;</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Foundation;