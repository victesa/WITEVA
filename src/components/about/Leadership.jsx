import React from 'react';
import './Leadership.css';
import Beatrice from "../../assets/Beatrice.jpg"
import Mercy from "../../assets/Mercy.png"

const Leadership = () => {
  const leaders = [
    {
      name: "Chepkorir Beatrice Tonui",
      role: "Chairlady",
      bio: "Beatrice is a renowned Policy Expert with a robust background in political and socio-economic advocacy for women's rights.",
      image: Beatrice
    },
    {
      name: "Dr. Mercy Cherotich Byegon",
      role: "Treasurer",
      bio: "Dr. Mercy is a dynamic and results-oriented professional with expertise in financial management and organizational strategy.",
      image: Mercy
    },
    {
      name: "Samba Nixon",
      role: "Secretariat",
      bio: "Mr. Samba is a highly skilled Systems & Organizational Development Expert focused on streamlining WITEVA's operational impact.",
      // image: "/assets/samba.jpg"
    },
    {
      name: "Veronica Nculubi Rotich",
      role: "Secretariat",
      bio: "Veronica is a dedicated plant researcher driven by a commitment to addressing agricultural challenges in the tea sector.",
      // image: "/assets/veronica.jpg"
    }
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        
        <header className="leadership-header">
          <h2>We are the people who make up WITEVA</h2>
          <p>
            Our leadership team brings together experts in policy, finance, and 
            research, all dedicated to the empowerment of women across Kenya.
          </p>
        </header>

        <div className="leadership-grid">
          {leaders.map((member, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-image-wrapper">
                {/* Placeholder image used here - replace with member.image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                />
              </div>
              <div className="leader-info">
                <h4 className="leader-name">{member.name}</h4>
                <p className="leader-role">{member.role}</p>
                <p className="leader-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;