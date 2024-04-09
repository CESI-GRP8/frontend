import React, { useState } from 'react';
import './PaymentMethodPage.css'; // Assurez-vous d'importer le fichier CSS avec les styles fournis

function CarteBancaire({ carte, onDelete }) {
  return (
    <div className="carte-bancaire">
      <p>{carte.numero}</p>
      <p>{carte.dateExpiration}</p>
      <p>{carte.nom}</p>
      <button onClick={() => onDelete(carte)}>Supprimer</button>
    </div>
  );
}

function PageCarteBancaire() {
  const [nouvelleCarte, setNouvelleCarte] = useState({});
  const [cartes, setCartes] = useState([]);
  const [erreur, setErreur] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouvelleCarte(prevCarte => ({
      ...prevCarte,
      [name]: value
    }));
    setErreur('');
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
          <CarteBancaire key={index} carte={carte} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default PageCarteBancaire;
