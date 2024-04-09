import React, { useState } from 'react';
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

  return (
    <div className="my-profile-page">
      <h2>Mon Profil</h2>
      <form className="profile-form">
        <label htmlFor="referralCode">Code de parrainage</label>
        <input
          id="referralCode"
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
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

        <label htmlFor="country">Pays</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Sélectionnez votre pays"
        >
          <option value="">Sélectionnez votre pays</option>
          {/* Ajoutez ici la liste des pays du monde */}
        </select>

        <label htmlFor="city">Ville</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Entrez votre ville"
        />

        <label htmlFor="streetAddress">N° de voie, Rue</label>
        <input
          id="streetAddress"
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Entrez votre adresse"
        />

        <label htmlFor="buildingType">Type de bâtiment</label>
        <input
          id="buildingType"
          type="text"
          value={buildingType}
          onChange={(e) => setBuildingType(e.target.value)}
          placeholder="Entrez le type de bâtiment"
        />

        <label htmlFor="deliveryInstructions">Instructions pour le livreur</label>
        <textarea
          id="deliveryInstructions"
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
          rows="4" // Vous pouvez ajuster le nombre de lignes selon votre besoin
          placeholder="Entrez les instructions pour la livraison"
        />
        
        <button type="submit" className="update-profile-btn">Mettre à jour</button>


      </form>
    </div>
  );
};

export default MyProfilePage;
