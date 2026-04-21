import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import './AnnualReports.css';

const AnnualReports = () => {
  const reports = [
    { year: "2025", title: "Annual Impact Report", desc: "Comprehensive review of our county-level initiatives and sector outcomes." },
    { year: "2024", title: "Strategic Plan", desc: "Our roadmap for women's leadership and economic independence through 2027." },
    { year: "2023", title: "Financial Audit", desc: "Full transparency on funding allocation and audited expenditure reports." }
  ];

  return (
    <section className="reports-section">
      <div className="reports-container">
        
        <header className="reports-header">
          <div className="reports-header-content">
            <span className="reports-tag">Transparency</span>
            <h2>Archive & Governance</h2>
          </div>
          <p className="reports-lead">
            WITEVA operates with full accountability. Explore our historical data 
            and strategic documentation to see how we maintain institutional integrity.
          </p>
        </header>

        <div className="reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="report-tile">
              <div className="tile-top">
                <FileText className="tile-icon" size={28} />
                <span className="tile-year">{report.year}</span>
              </div>
              <div className="tile-body">
                <h3>{report.title}</h3>
                <p>{report.desc}</p>
              </div>
              <a href="#" className="tile-link">
                View Document <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AnnualReports;