import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import './DropDownMenu.css';


const L_DropDownMenu = () => {
  const navigate = useNavigate(); // Initialisez useNavigate
  const handleSelectOption = (selectedOption) => {
    console.log(`Option sélectionnée : ${selectedOption}`);
    // Redirige l'utilisateur vers la route sélectionnée
    switch(selectedOption) {
      case 'mon-profil':
        navigate('/myprofile');
        break;
        case 'l_wallet':
          navigate('/wallet_l');
          break;
      case 'contactez-nous':
        navigate('/contactus');
        break;
      case 'parametres':
        navigate('/parameters');
        break;
      default:
        // Gérer le cas par défaut ou ne rien faire
        break;
    }
  };

  return (
    <div>
      <div className="DropDown">
      <select onChange={(e) => handleSelectOption(e.target.value)} defaultValue="">
        <option value="" disabled>Choisissez une option</option>
        <option value="mon-profil">Mon Profil</option>
        <option value="l_wallet">Mon portefeuille</option>
        <option value="contactez-nous">Contactez-nous</option>
        <option value="parametres">Paramètres</option>
      </select>
    </div></div>
  );
};

export default L_DropDownMenu;
