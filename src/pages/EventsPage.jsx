import React from 'react';
import './EventsPage.css';
import Footer from '../components/Footer';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      day: "24",
      month: "MAY",
      title: "Stakeholder Policy Dialogue: Gender in the Tea Value Chain",
      location: "Nairobi, Kenya",
      time: "09:00 AM - 01:00 PM",
      category: "Advocacy",
      status: "Registration Open",
      // External Google Form or Tally link
      link: "https://forms.google.com/your-registration-form" 
    },
    {
      id: 2,
      day: "12",
      month: "JUN",
      title: "Field Workshop: Sustainable Farm Management for Women Leaders",
      location: "Nandi County",
      time: "10:00 AM - 04:00 PM",
      category: "Field Training",
      status: "Invite Only",
      // Mailto link for direct inquiry
      link: "mailto:events@witeva.org?subject=Inquiry: Nandi Field Workshop" 
    },
    {
      id: 3,
      day: "05",
      month: "JUL",
      title: "WITEVA Annual General Meeting & Impact Showcase",
      location: "Virtual / Zoom",
      time: "02:00 PM - 03:30 PM",
      category: "Governance",
      status: "Public Access",
      // Direct Zoom Registration link
      link: "https://zoom.us/webinar/register/abc123example" 
    }
  ];

  return (
    <div>
        <main className="events-page">
      <div className="events-container">
        
        <header className="events-header">
          <div className="header-pill">Official Agenda</div>
          <h1>Engagement & Advocacy Calendar</h1>
          <p>
            Join us at the forefront of the tea sector's transformation. Explore our 
            upcoming workshops, policy dialogues, and community training sessions.
          </p>
        </header>

        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-row">
              <div className="event-date-col">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
              </div>

              <div className="event-info-col">
                <span className="event-category-tag">{event.category}</span>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className="event-loc">📍 {event.location}</span>
                  <span className="event-time">🕒 {event.time}</span>
                </div>
              </div>

              <div className="event-action-col">
                <span className={`event-status ${event.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {event.status}
                </span>
                {/* Changed to an <a> tag for external navigation */}
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="event-btn-link"
                >
                  {event.category === "Governance" ? "Join Webinar" : "Register Now"}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>

    <Footer/>
    </div>
  );
};

export default EventsPage;