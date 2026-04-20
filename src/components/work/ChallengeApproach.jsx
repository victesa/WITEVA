import React from 'react';
import './ChallengeApproach.css';

const ChallengeApproach = () => {
  return (
    <section className="challenge-section">
      <div className="challenge-container">
        
        {/* Main Section Header - Now Left Aligned */}
        <header className="challenge-header">
          <span className="challenge-subtitle">Strategy & Vision</span>
          <h2 className="challenge-title">
            Beyond the Leaf: Transforming the <br /> 
            Realities of Women in Tea
          </h2>
        </header>

        {/* The 2-Column Split */}
        <div className="challenge-grid">
          
          <div className="challenge-column">
            <h3 className="column-label">The Challenge</h3>
            <p>
              The 2023 crisis exposed the systemic vulnerabilities and exploitation 
              facing women across Kenya’s 21 tea-growing counties. While women form 
              the backbone of the agricultural workforce, they have historically 
              been excluded from leadership and basic workplace protections.
            </p>
          </div>

          <div className="challenge-column accent-column">
            <h3 className="column-label">Our Approach</h3>
            <p>
              At WITEVA, we do not just react to these inequities; we dismantle them. 
              Our approach is two-fold: we provide immediate, ground-level protection 
              against gender-based violence, while simultaneously driving systemic 
              economic empowerment and policy reform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChallengeApproach;