import React from 'react';
import { Link } from 'react-router-dom';
import './R_ConnectedHeader.css';
import R_DropDownMenu from '../DropDown/R_DropDownMenu';
const R_ConnectedHeader = ({ username, onLogout }) => {
  return (
    <header className="connected-header">
      <div className="menu-icon">
        {/* Icône de menu ou logo ici */}
      </div>
      <a href="/"><img src="https://i.ibb.co/4mhnbt3/Screenshot-3-removebg-preview.png" alt="Ces'Eats Logo" className="header-logo" /></a>
      <nav className="navigation">
        <Link to="/orders_r" className="nav-link">COMMANDES</Link>
        <Link to="/menu_r" className="nav-link">MENUS</Link>
      </nav>
      <R_DropDownMenu />
      <div className="user-info">
        {/* Utiliser username ou avatar ici */}
        <span className="username">{username}</span>
        {/* Vous pouvez également ajouter un bouton de déconnexion ici */}
        <button onClick={onLogout}>Déconnexion</button>
      </div>
    </header>
  );
};

export default R_ConnectedHeader;
