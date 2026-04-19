import React from 'react';
import './HowToHelp.css';

const HowToHelp = () => {
  const helpOptions = [
    { 
      title: "Individual Membership", 
      desc: "For women workers and farmers in the 21 counties.", 
      /* Icon: Account / User Circle */
      icon: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.81 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,13.81 19.38,15.5 18.36,16.83M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" 
    },
    { 
      title: "Become a Donor Today", 
      desc: "Consider becoming a monthly donor to ensure ongoing support.", 
      /* Icon: Heart */
      icon: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" 
    },
    { 
      title: "Corporate Partnership", 
      desc: "WITEVA welcomes partnerships with corporations that share our values.", 
      /* Icon: Handshake / Partnership */
      icon: "M16,13C15.71,13 15.42,13 15.13,13.05C15.05,13.03 14.96,13 14.87,13H13.13C13.04,13 12.95,13.03 12.87,13.05C12.58,13 12.29,13 12,13C9.79,13 8,14.79 8,17V21H20V17C20,14.79 18.21,13 16,13M11,9C11,6.79 9.21,5 7,5C4.79,5 3,6.79 3,9C3,11.21 4.79,13 7,13C9.21,13 11,11.21 11,9Z" 
    },
    { 
      title: "Advocacy Partner", 
      desc: "For those willing to volunteer their time or voice.", 
      /* Icon: Megaphone / Voice */
      icon: "M12,8H15L15,10H12V8M12,11H18L18,13H12V11M10,12H9V11H10V12M9,13H10V14H9V13M18.89,21.41L17.47,20L19.41,18.06C18.66,17.31 18.25,16.29 18.25,15.22C18.25,14.15 18.66,13.13 19.41,12.38L17.47,10.45L18.89,9.03L22.31,12.44C23.23,13.36 23.23,14.86 22.31,15.78L18.89,21.41M12,4H2V20H12V4Z" 
    }
  ];

  return (
    <section className="help-section">
      <div className="help-container">
        
        <header className="help-header">
          <h2>How could you help?</h2>
          <p>At WITEVA, we believe that the collective power of compassion and generosity can create meaningful change in the world.</p>
        </header>

        <div className="help-grid">
          {helpOptions.map((item, index) => (
            <div className="h-card" key={index}>
              <div className="h-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={item.icon} />
                </svg>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToHelp;