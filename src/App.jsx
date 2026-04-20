import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
// Import your other pages here

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Your page routes go here */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About/>}/>
          <Route path='/our-work' element={<OurWork/>}/>
          {/* Add the rest of your routes to match the navbar links */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;