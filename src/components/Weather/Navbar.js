import React from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">TravelPerk</a>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Alerts</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
