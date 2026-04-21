import React from 'react';
import './Hero.css';
import potrait from "../assets/farmer_potrait.png"

// Ensure your map image is saved as kenya-map.png inside src/assets/
import kenyaMap from '../assets/kenya-map.png'; 
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigates to the About page with a hash
    navigate('/our-work#programs');
  };
  return (
    <section className="hero">
      {/* Background graph-paper grid */}
      <div className="hero-bg-grid"></div>

      <div className="hero-container">
        
        {/* Left Column: Content (60%) */}
        <div className="hero-content">
          <div className="map-wrapper">
             <img src={kenyaMap} alt="Map of Kenya Silhouette" className="map-image" />
          </div>

          <p className="tagline">Inclusivity and Equity in the Tea Sector</p>
          <h1>Empowering Women Across Kenya's Tea Value Chain.</h1>
          <p className="description">
            WITEVA facilitates the professional advancement and economic integration of women within the global tea economy. We ensure women are recognized as strategic leaders from cultivation to consumption.
          </p>
          
          <div className='hero-actions'>
            <button className="btn-primary" onClick={handleExploreClick}>
              Explore Our Programs
            </button>
            
            {/* Using Link instead of <a> for faster internal navigation */}
            <Link to="/support-mission" className="link-secondary">
              Support the Mission <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: 3-Column Flex Masonry (40% + Bleed) */}
        <div className="hero-gallery">
          
          {/* Column 1 */}
          <div className="gallery-col">
            <div className="img-wrapper portrait-short">
              <img src={potrait} alt="Woman leader" />
            </div>
            <div className="img-wrapper landscape">
              <img src="https://images.unsplash.com/photo-1601216811151-b0ffdb3e1ea0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fEtlbnlhbiUyMHRlYSUyMHxlbnwwfDB8fHwxNzc2NTkxNzQ2fDA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="Tea estate" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="gallery-col">
            <div className="img-wrapper landscape-short">
              <img src="https://images.unsplash.com/photo-1644335471325-52e2d44fca64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDJ8fHRlYSUyMGZhY3Rvcnl8ZW58MHwwfHx8MTc3NjU5MTg0OHww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="Sorting leaves" />
            </div>
            <div className="img-wrapper landscape-short">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQEuSCnHM6qVXg/feedshare-shrink_800/B4DZmb9HYrGQAg-/0/1759258116597?e=1778112000&v=beta&t=JBKMVoNmXJIiNf9rDgPa9XuF6aM1wU8TndcpZuwLF04" alt="Boardroom" />
            </div>
            <div className="img-wrapper landscape">
              <img src="https://images.unsplash.com/photo-1593490755898-b6f1d8e637cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDE0fHx0ZWElMjBmYWN0b3J5fGVufDB8MHx8fDE3NzY1OTE4NDh8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="Tea fields" />
            </div>
          </div>

          {/* Column 3 (Bleeds off screen) */}
          <div className="gallery-col">
            <div className="img-wrapper portrait-short">
              <img src="https://images.unsplash.com/photo-1770530713498-9908b62215d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDYyfHx0ZWElMjBsZWF2ZXN8ZW58MHwwfHx8MTc3NjU5MTkzOHww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="Tea leaves close up" />
            </div>
            <div className="img-wrapper landscape-short">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHhSOTzg-b6zw/feedshare-shrink_2048_1536/B4DZmHIE3rGQAw-/0/1758908668434?e=1778112000&v=beta&t=8ulkSstkIUpWwwLPPS2D9gRf3gnICEdl6Pqe0y38eJA" alt="Woman in traditional dress" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;