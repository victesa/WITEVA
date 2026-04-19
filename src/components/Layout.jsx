import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      {/* The Navbar will stay fixed at the top */}
      <Navbar />
      
      {/* The 'children' will be the specific page content that changes */}
      <main className="page-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;