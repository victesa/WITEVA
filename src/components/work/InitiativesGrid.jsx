import React from 'react';
import { Link } from 'react-router-dom';
import './InitiativesGrid.css';

const InitiativesGrid = () => {
  const initiatives = [
    {
      id: 1,
      tag: "Economic Empowerment",
      date: "August 12, 2025",
      title: "Financial Literacy Bootcamp: Empowering 500 Cooperative Leaders",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      link: "/impact/financial-literacy-2025"
    },
    {
      id: 2,
      tag: "Protection",
      date: "July 28, 2025",
      title: "Expanding the Sanctuary Network: Two New Safe Houses in Kericho",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
      link: "/impact/safe-houses-expansion"
    },
    {
      id: 3,
      tag: "Policy & Advocacy",
      date: "July 15, 2025",
      title: "National Townhall: Presenting the Woman in Tea Labor Rights Agenda",
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800",
      link: "/impact/labor-rights-agenda"
    }
  ];

  return (
    <section className="work-grid-section">
      <div className="work-grid-container">
        
        <header className="work-grid-header">
          <span className="work-grid-subtitle">Initiatives in Action</span>
          <h2>Current Projects & Recent Impact</h2>
        </header>

        <div className="work-grid-layout">
          {initiatives.map((item) => (
            <Link to={item.link} key={item.id} className="work-impact-card">
              <div className="work-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="work-pill">{item.tag}</span>
                  <span className="work-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="work-card-link">Read the Full Story →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InitiativesGrid;