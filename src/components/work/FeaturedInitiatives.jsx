import React from 'react';
import './FeaturedInitiatives.css';
import advocacy from "../../assets/advocacy.jpg"
import empowerment from "../../assets/empowerment.jpg"

const FeaturedInitiatives = () => {
  const initiatives = [
  {
      tag: "Advocacy",
      title: "Advocacy and Storytelling Programmes Amplifying Lived Experiences",
      description: "In direct response to the 2023 crisis, we provide a formal legal sanctuary for women. Our program offers counseling, legal representation, and safety networks for those facing harassment or exploitation in tea estates.",
      image: advocacy, 
      buttonText: "Voices of Change"
    },
    {
      tag: "Economic Empowerment",
      title: "Economic Literacy and Market Access for Women Farmers",
      description: "We bridge the gap between labor and leadership. Through financial training and collective bargaining support, we ensure women receive fair wages and have the resources to invest back into their families and communities.",
      image: empowerment, 
      buttonText: "Join the Initiative"
    }
  ];

  return (
    <section className="featured-initiatives-section" id='programs'>
      <div className="initiatives-container">
        
        {/* Section Header */}
        <header className="initiatives-header">
          <span className="section-tag">Featured Programme</span>
          <h2>Featured Initiatives<br/>Making an Impact</h2>
        </header>

        {/* The Cards Grid */}
        <div className="initiatives-list">
          {initiatives.map((item, index) => (
            <div className="initiative-card" key={index}>
              
              {/* Text Side (Always first in DOM) */}
              <div className="initiative-text-side">
                <span className="initiative-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn-initiative">{item.buttonText}</button>
              </div>

              {/* Image Side */}
              <div className="initiative-image-side">
                <img src={item.image} alt={item.title} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedInitiatives;