import React, { useState } from 'react';
import './ResetPassword.css';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter le code pour la réinitialisation du mot de passe ici
    console.log('Réinitialisation du mot de passe avec l\'email:', email);
  };

  return (
    <div className="password-reset-page">
      <form onSubmit={handleSubmit} className="password-reset-form">
        <h2>Mot de passe oublié</h2>
        
        <label htmlFor="email">E-mail *</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <button type="submit" className="continue-btn">CONTINUER</button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
