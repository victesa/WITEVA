import React from 'react';
import './TeaDayPromo.css';
import teadayposter from "../assets/poster.png";
import tealeaves from "../assets/tea_leaves.png"; // Import your image here

const TeaDayPromo = () => {
  return (
    <section className="tea-day-section">
      
      {/* --- Image Watermarks (4 Corners) --- */}
      <img src={tealeaves} className="leaf-watermark leaf-top-left" alt="" />
      <img src={tealeaves} className="leaf-watermark leaf-top-right" alt="" />
      <img src={tealeaves} className="leaf-watermark leaf-bottom-left" alt="" />
      <img src={tealeaves} className="leaf-watermark leaf-bottom-right" alt="" />
      {/* ------------------------------------- */}

      <div className="tea-day-container">
        <h2 className="tea-day-title">INTERNATIONAL TEA DAY 2026</h2>
        <div className="tea-day-content">
          <div className="tea-day-poster">
            <img src={teadayposter} alt="International Tea Day 2026 Poster" />
          </div>
          <div className="tea-day-text">
            <h3>Celebrating the 21 Counties That Drive Kenya's Tea Sector</h3>
            <p>
              Kenya stands as a global leader in tea production, thanks to the dedicated work of millions of smallholder farmers across the nation. On May 21st, we celebrate their invaluable contribution to our economy and culture. The thriving tea sector spans 21 counties, from the rolling hills of Kericho to the vibrant fields of Meru and Kisii, each providing unique flavor profiles loved worldwide.
            </p>
            <p>
              Join us this International Tea Day to honor the resilience and expertise of our farmers. Our NGO works closely with these communities to promote sustainable practices, ensure fair wages, and enhance livelihoods. Explore the diverse events happening across Kenya—from cultural festivals to farming workshops—and learn how you can support the hands that nurture our tea fields.
            </p>
            <button className="btn-events">VIEW THE EVENTS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaDayPromo;