import React from 'react';
import './DropDownMenu.css';

const DropdownMenu = () => {
  const handleSelectOption = (selectedOption) => {
    // Implémentez ici la logique pour gérer le choix de l'option sélectionnée
    console.log(`Option sélectionnée : ${selectedOption}`);
  };

  return (
    <div>
      <select onChange={(e) => handleSelectOption(e.target.value)}>
        <option value="">Choisissez une option</option>
        <option value="mes-commandes">Mes commandes</option>
        <option value="mon-profil">Mon Profil</option>
        <option value="methodes-de-paiement">Méthodes de paiement</option>
        <option value="contactez-nous">Contactez-nous</option>
        <option value="parametres">Paramètres</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
