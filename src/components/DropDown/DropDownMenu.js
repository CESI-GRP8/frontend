import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import './DropDownMenu.css';


const DropdownMenu = () => {
  const navigate = useNavigate(); // Initialisez useNavigate
  const handleSelectOption = (selectedOption) => {
    console.log(`Option sélectionnée : ${selectedOption}`);
    // Redirige l'utilisateur vers la route sélectionnée
    switch(selectedOption) {
      case 'mes-commandes':
        navigate('/orders');
        break;
      case 'mon-profil':
        navigate('/myprofile');
        break;
      case 'methodes-de-paiement':
        navigate('/paymentmethod');
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
      <select onChange={(e) => handleSelectOption(e.target.value)} defaultValue="">
        <option value="" disabled>Choisissez une option</option>
        <option value="mes-commandes">Mes commandes</option>
        <option value="mon-profil">Mon Profil</option>
        <option value="methodes-de-paiement">Méthodes de paiement</option>
        <option value="contactez-nous">Contactez-nous</option>
        <option value="parametres">Paramètres</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
