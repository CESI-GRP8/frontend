import React from 'react';
import { Link } from 'react-router-dom';
import './ConnectedHeader.css';
import DropdownMenu from '../DropDown/DropDownMenu';
import '../DropDown//DropDownMenu.css';


const ConnectedHeader = ({ username, onLogout }) => {
  return (
    <header className="connected-header">
      <div className="menu-icon">
        {/* Icône de menu ou logo ici */}
      </div>
      <a href="/"><img src="https://i.ibb.co/4mhnbt3/Screenshot-3-removebg-preview.png" alt="Ces'Eats Logo" className="header-logo" /></a>
      <nav className="navigation">
        <Link to="/restaurant" className="nav-link">ACCUEIL</Link>
        <Link to="/cart" className="nav-link">PANIER</Link>
        <Link to="/notifications" className="nav-link">NOTIFICATIONS</Link>
      </nav>
      <DropdownMenu />
      <div  className="deconnexion">
        <button onClick={onLogout}><Link to="/">Déconnexion</Link></button>
      </div>
    </header>
  );
};

export default ConnectedHeader;
