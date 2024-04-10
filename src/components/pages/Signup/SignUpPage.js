import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [establishmentName, setEstablishmentName] = useState('');
  const [restaurantType, setRestaurantType] = useState('');
  const [floorSuite, setFloorSuite] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      type: role,
      email: email,
      phone: phoneNumber,
      sponsorCode: referralCode,
      surname: lastName,
      firstname: firstName,
      password: password,
      address: address,
      restaurantName: establishmentName,
      restaurantType: restaurantType,
      restaurantAddress: address,
      restaurantPhone: phoneNumber,
      floorSuite: floorSuite
    };

    try {
      const response = await axios.post('http://localhost/1.0/accounts/register', userData);
      console.log('Response from server:', response.data);

      setRole('');
      setEmail('');
      setPhoneNumber('');
      setReferralCode('');
      setLastName('');
      setFirstName('');
      setPassword('');
      setAddress('');
      setEstablishmentName('');
      setRestaurantType('');
      setFloorSuite('');
    } catch (error) {
      console.error('Error while signing up:', error);
    }
  };

  const renderFieldsBasedOnRole = () => {
    switch (role) {
      case 'user':
        return (
          <>
            <label htmlFor="address">Adresse de livraison *</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </>
        );
      case 'Restaurateur':
        return (
          <>
            <label htmlFor="establishmentAddress">Adresse de l'établissement *</label>
            <input
              id="establishmentAddress"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="floorSuite">Étage/Suite (Facultatif)</label>
            <input
              id="floorSuite"
              type="text"
              value={floorSuite}
              onChange={(e) => setFloorSuite(e.target.value)}
            />
            <label htmlFor="establishmentName">Nom de l'établissement *</label>
            <input
              id="establishmentName"
              type="text"
              value={establishmentName}
              onChange={(e) => setEstablishmentName(e.target.value)}
              required
            />
            <label htmlFor="restaurantType">Type de restaurant *</label>
            <input
              id="restaurantType"
              type="text"
              value={restaurantType}
              onChange={(e) => setRestaurantType(e.target.value)}
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Inscription</h2>
        <label htmlFor="role">Rôle *</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Choisissez un rôle</option>
          <option value="user">Client</option>
          <option value="Restaurateur">Restaurateur</option>
          <option value="Livreur">Livreur</option>
          <option value="Developpeur">Developpeur</option>
          <option value="Service commercial">Service commercial</option>
        </select>

        <label htmlFor="email">E-mail *</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Numéro de téléphone *</label>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label htmlFor="referralCode">Code de parrainage (Facultatif)</label>
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
          required
        />

        <label htmlFor="firstName">Prénom *</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="password">Mot de passe *</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {renderFieldsBasedOnRole()}

        <button type="submit" className="continue-btn">CONTINUER</button>
      </form>
    </div>
  );
};

export default SignUpPage;
