import React from 'react';
import './NavBar.css'; 
import logo from '../Images/NIIF Infrastructure.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Replace with your image */}
        <img src={logo} alt="NIIF Infrastructure logo" />
      </div>
      <div className="navbar-title">
        <h1>Your Title</h1>
      </div>
    </nav>
  );
};

export default Navbar;
