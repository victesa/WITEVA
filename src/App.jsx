import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the fix
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import ImpactNews from './pages/ImpactNews';
import NewsDetail from './pages/NewsDetail';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import SupportMission from './pages/SupportMission';

const App = () => {
  return (
    <Router>
      {/* THE MASTER FIX: 
         This component triggers on every route change 
      */}
      <ScrollToTop /> 

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About/>}/>
          <Route path='/our-work' element={<OurWork/>}/>
          <Route path="impact-news" element={<ImpactNews/>}/>
          <Route path="/news/:id" element={<NewsDetail/>} />
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/support-mission" element={<SupportMission/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;