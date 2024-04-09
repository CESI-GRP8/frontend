// Header.js
import React from 'react';
import './Header.css'; // Link to your CSS file

const Header = () => {
    return (
      <header className="header">
        <a href="/"><img src="https://i.ibb.co/4mhnbt3/Screenshot-3-removebg-preview.png" alt="Ces'Eats Logo" className="header-logo" /></a>
        <nav className="header-nav">
          <a href="/signup" className="nav-link">Inscription</a>
          <a href="/signin" className="nav-link nav-link--signin">Connexion</a>
        </nav>
      </header> 
    );
  };
  
export default Header;
