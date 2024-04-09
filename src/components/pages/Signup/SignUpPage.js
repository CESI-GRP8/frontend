import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the sign-up logic here
    console.log('Signing up with:', role, email, phoneNumber, referralCode, lastName, firstName, password);
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
          <option value="Client">Client</option>
          <option value="Restaurateur">Restaurateur</option>
          <option value="Livreur">Livreur</option>
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
        
        <button type="submit" className="continue-btn">CONTINUER</button>
      </form>
    </div>
  );
};

export default SignUpPage;
