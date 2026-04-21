import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import './OurValues.css';

const OurValues = () => {
  const navigate = useNavigate(); // Initialize navigation

  const values = [
    {
      title: "Dignity",
      desc: "We honor the inherent worth and potential of every woman in the tea sector, ensuring their rights are protected and their voices are heard.",
      icon: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
    },
    {
      title: "Integrity",
      desc: "We practice radical transparency and ethical leadership at all levels, ensuring every decision is made with honesty and accountability.",
      icon: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7M12,19.2C9.27,19.2 6.95,17.33 6.13,14.75C7.3,13.93 8.84,13.5 10.5,13.5H13.5C15.16,13.5 16.7,13.93 17.87,14.75C17.05,17.33 14.73,19.2 12,19.2Z"
    },
    {
      title: "Excellence",
      desc: "We commit to the highest global standards of professionalism, delivering precision and reliability in everything we do for our members.",
      icon: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66L12,15.39Z"
    },
    {
      title: "Equity",
      desc: "We champion fairness regardless of social or economic backgrounds, ensuring that opportunity is a right for all, never a privilege.",
      icon: "M16,13C15.71,13 15.42,13 15.13,13.05C15.05,13.03 14.96,13 14.87,13H13.13C13.04,13 12.95,13.03 12.87,13.05C12.58,13 12.29,13 12,13C9.79,13 8,14.79 8,17V21H20V17C20,14.79 18.21,13 16,13M11,9C11,6.79 9.21,5 7,5C4.79,5 3,6.79 3,9C3,11.21 4.79,13 7,13C9.21,13 11,11.21 11,9Z"
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of collective ownership, where our stakeholders work as one team to achieve sustainable community outcomes.",
      icon: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z"
    },
    {
      title: "Sustainability",
      desc: "We advocate for long-term social and environmental practices that secure the future of Kenya’s tea industry and its people.",
      icon: "M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
    }
  ];

  return (
    <section className="values-section" id='values'>
      <div className="values-container">
        
        <header className="values-header">
          <span className="about-tag">Our Values</span>
          <h2>The Values That Guide Our Work in the Community</h2>
          <p className="values-intro">
            WITEVA is built on a foundation of ethical advocacy and professional 
            excellence, ensuring every woman in the tea value chain is empowered to thrive.
          </p>
        </header>

        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={v.icon} />
                </svg>
              </div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="values-footer-actions">
          {/* Navigates to the Support page we built earlier */}
          <button 
            className="btn-get-involved-solid" 
            onClick={() => navigate('/support-mission')}
          >
            Get Involved
          </button>
          
          {/* Navigates to the Contact page */}
          <button 
            className="btn-contact-outline" 
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurValues;