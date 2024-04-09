import React, { useState, useEffect } from 'react';
import './MyProfilePage.css';

const MyProfilePage = () => {
  const [referralCode, setReferralCode] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  // Fonction pour générer un code de parrainage aléatoire
  const generateReferralCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setReferralCode(code);
  };

  // Utilisation de l'effet de montée pour générer le code de parrainage une seule fois lors du chargement initial
  useEffect(() => {
    generateReferralCode();
  }, []);

  return (
    <div className="my-profile-page">
      <h2>Mon Profil</h2>
      <form className="profile-form">
        <label htmlFor="referralCode">Code de parrainage</label>
        <input
          id="referralCode"
          type="text"
          value={referralCode}
          readOnly // Empêche l'édition manuelle du code de parrainage
          placeholder="Généré automatiquement"
        />

        <label htmlFor="lastName">Nom *</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Entrez votre nom de famille"
          required
        />

        <label htmlFor="firstName">Prénom *</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Entrez votre prénom"
          required
        />

        <label htmlFor="phoneNumber">Numéro de téléphone *</label>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Entrez votre numéro de téléphone"
          required
        />

        <label htmlFor="country">Pays *</label>
        <input
          id="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Entrez votre pays"
          required
        />

        <label htmlFor="city">Ville *</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Entrez votre ville"
          required
        />

        <label htmlFor="streetAddress">N° de voie, Rue *</label>
        <input
          id="streetAddress"
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Entrez votre adresse"
          required
        />

        <label htmlFor="buildingType">Type de bâtiment *</label>
        <input
          id="buildingType"
          type="text"
          value={buildingType}
          onChange={(e) => setBuildingType(e.target.value)}
          placeholder="Entrez le type de bâtiment"
          required
        />

        <label htmlFor="deliveryInstructions">Instructions pour le livreur</label>
        <textarea
          id="deliveryInstructions"
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
          rows="4"
          placeholder="Entrez les instructions pour la livraison"
        />

        <button type="submit" className="update-profile-btn">Mettre à jour</button>
      </form>
    </div>
  );
};

export default MyProfilePage;
