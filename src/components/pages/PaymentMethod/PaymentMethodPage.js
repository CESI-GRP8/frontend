import React, { useState } from 'react';
import { usePayment } from '../../../context/PaymentContext'; // Ajustez le chemin selon votre structure
import './PaymentMethodPage.css';

function CarteBancaire({ carte, onDelete, onSetDefault, isDefault }) {
  return (
    <div className="carte-bancaire">
      <p>{carte.numero}</p>
      <p>{carte.dateExpiration}</p>
      <p>{carte.nom}</p>
      <button onClick={() => onDelete(carte)}>Supprimer</button>
      <br />
      <button onClick={() => onSetDefault(carte)}>{isDefault ? "Carte par défaut" : "Définir par défaut"}</button>
    </div>
  );
}

function PageCarteBancaire() {
  const [nouvelleCarte, setNouvelleCarte] = useState({});
  const [erreur, setErreur] = useState('');
  const { cartes, setCartes, carteParDefaut, setCarteParDefaut } = usePayment();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouvelleCarte(prevCarte => ({
      ...prevCarte,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nouvelleCarte.numero || !nouvelleCarte.dateExpiration || !nouvelleCarte.nom) {
      setErreur('Veuillez remplir tous les champs.');
      return;
    }

    setCartes(prevCartes => [...prevCartes, nouvelleCarte]);
    setNouvelleCarte({});
    setErreur('');
  };

  const handleDelete = (carteToDelete) => {
    setCartes(prevCartes => prevCartes.filter(carte => carte !== carteToDelete));
    if (carteParDefaut === carteToDelete) {
      setCarteParDefaut(null);
    }
  };

  const handleSetDefault = (carteToSetDefault) => {
    setCarteParDefaut(carteToSetDefault);
  };

  return (
    <div className="my-profile-page">
      <div className="profile-form">
        <h2>Ajouter une carte bancaire</h2>
        <form onSubmit={handleSubmit}>
          <label>Numéro de carte*</label>
          <input 
            type="text" 
            name="numero" 
            value={nouvelleCarte.numero || ''} 
            onChange={handleChange} 
            pattern="[0-9]*"
            required 
          />
          <label>Date d'expiration*</label>
          <input 
            type="text" 
            name="dateExpiration" 
            value={nouvelleCarte.dateExpiration || ''} 
            onChange={handleChange} 
            pattern="[0-9]{2}/[0-9]{2}"
            placeholder="MM/YY"
            required 
          />
          <label>Nom sur la carte*</label>
          <input 
            type="text" 
            name="nom" 
            value={nouvelleCarte.nom || ''} 
            onChange={handleChange} 
            required 
          />
          <button className="update-profile-btn" type="submit">Ajouter la carte</button>
        </form>
        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      </div>
      
      <h2>Liste des cartes bancaires</h2>
      <div className="liste-cartes">
        {cartes.map((carte, index) => (
          <CarteBancaire 
            key={index} 
            carte={carte} 
            onDelete={handleDelete} 
            onSetDefault={handleSetDefault} 
            isDefault={carte === carteParDefaut}
          />
        ))}
      </div>
    </div>
  );
}

export default PageCarteBancaire;
