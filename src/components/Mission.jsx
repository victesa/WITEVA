import React from 'react';
import './Mission.css';

const Mission = () => {
  const missionCards = [
    {
      title: "Ending Gender-Based Violence",
      desc: "We prevent and respond to GBV by strengthening workplace safeguards, supporting survivors, and promoting zero-tolerance policies across tea estates.",
      /* Icon: Shield / Protection */
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"
    },
    {
      title: "Strengthening Livelihoods",
      desc: "We improve economic security through skills training, income diversification, financial literacy, and access to dignified work opportunities.",
      /* Icon: Currency / Financial Security */
      icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
    },
    {
      title: "Building Climate Resilience",
      desc: "We equip women tea workers with climate-smart knowledge and tools to adapt to environmental changes and sustain their communities.",
      /* Icon: Leaf / Eco-Resilience */
      icon: "M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
    },
    {
      title: "Policy & Systems Advocacy",
      desc: "We work with government and industry leaders to influence policies that protect women’s rights, improve labor conditions, and ensure sector reform.",
      /* Icon: Gavel / Institutional Authority */
      icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,6V14L17.2,17.7L18.2,16.1L12.5,12.7V6H11Z"
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        
        <header className="mission-header">
          <h2>The mission of our organization</h2>
          <p>WITEVA is committed to transforming the tea sector through four strategic pillars designed to empower every woman in the value chain.</p>
        </header>

        <div className="mission-body">
          <div className="mission-cards-stack">
            {missionCards.map((card, index) => (
              <div className="m-card" key={index}>
                <div className="m-card-icon-box">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={card.icon} />
                  </svg>
                </div>
                <div className="m-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mission-image-wrapper">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQE36xZ1SJnVnQ/feedshare-shrink_1280/B4DZjNei5pH0As-/0/1755794087184?e=1778112000&v=beta&t=t49PORTx8MUXqIVk1jwtFYwulXD4hkE_auXI67HteQ8" 
              alt="WITEVA Community Support" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;