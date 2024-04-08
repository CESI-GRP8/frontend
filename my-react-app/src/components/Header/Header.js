// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Link to your CSS file

const Header = () => {
  return (
    <header className="header">
      <img src="/path-to-ceseats-logo.svg" alt="Ces'Eats Logo" className="header-logo" />
      <nav className="header-nav">
        <Link to="/signup" className="nav-link">Inscription</Link>
        <Link to="/signin" className="nav-link nav-link--signin">Connexion</Link>
      </nav>
    </header>
  );
};

export default Header;
