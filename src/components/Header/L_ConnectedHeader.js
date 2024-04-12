import React from 'react';
import { Link } from 'react-router-dom';
import './R_ConnectedHeader.css';
import L_DropDownMenu from '../DropDown/L_DropDownMenu';

const L_ConnectedHeader = ({ username, onLogout }) => {
  return (
    <header className="connected-header">
      <div className="menu-icon">
        {/* Icône de menu ou logo ici */}
      </div>
      <a href="/"><img src="https://i.ibb.co/4mhnbt3/Screenshot-3-removebg-preview.png" alt="Ces'Eats Logo" className="header-logo" /></a>
      <nav className="navigation">
        <Link to="/orders_r" className="nav-link">COMMANDES DISPONIBLES</Link>
        <Link to="/Notifications" className="nav-link">NOTIFICATIONS</Link>

      </nav>
      <L_DropDownMenu />
      <div className="user-info">
        {/* Utiliser username ou avatar ici */}
        <span className="username">{username}</span>
        {/* Vous pouvez également ajouter un bouton de déconnexion ici */}
        <button onClick={onLogout}>Déconnexion</button>
      </div>
    </header>
  );
};

export default L_ConnectedHeader;
