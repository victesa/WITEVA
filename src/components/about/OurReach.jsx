import React, { useEffect } from 'react';
import './OurReach.css';

const OurReach = () => {
  useEffect(() => {
    // This replicates the script Datawrapper provides to handle iframe resizing
    const handleMessage = (e) => {
      if (typeof e.data['datawrapper-height'] !== 'undefined') {
        const iframes = document.querySelectorAll('iframe');
        for (let chartId in e.data['datawrapper-height']) {
          for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === e.source) {
              const height = e.data['datawrapper-height'][chartId] + 'px';
              iframes[i].style.height = height;
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const counties = [
    "Nakuru", "Narok", "Kericho", "Bomet", "Nyamira", "Kisii",
    "Kakamega", "Bungoma", "Vihiga", "Nandi", "Elgeyo Marakwet", "Trans-Nzoia",
    "Kiambu", "Murang’a", "Nyeri", "Kirinyaga", "Embu", "Tharaka-Nithi", "Meru"
  ];

  return (
    <section className="reach-section" id='counties'>
      <div className="reach-container">
        
        <header className="reach-header">
          <h2>OUR REACH</h2>
          <div className="header-line"></div>
        </header>

        <div className="reach-split">
          {/* Left Column: County List */}
          <div className="reach-content">
            <h3>Operating Across the Kenyan Tea Belt</h3>
            <p className="reach-intro">
              WITEVA's impact spans the heart of Kenya's tea-growing regions. We provide 
              representation and support for women in 19 primary counties, ensuring that 
              no matter where the tea is grown, the hands that harvest it are protected.
            </p>
            
            <div className="county-grid">
              {counties.map((county, index) => (
                <div key={index} className="county-item">
                  <span className="dot"></span>
                  {county}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Map */}
          <div className="reach-map-container">
            <iframe 
              title="WITEVA Regional Operations Map" 
              aria-label="Choropleth map" 
              id="datawrapper-chart-1POW2" 
              src="https://datawrapper.dwcdn.net/1POW2/1/" 
              scrolling="no" 
              frameBorder="0" 
              className="reach-map-iframe"
              data-external="1"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurReach;