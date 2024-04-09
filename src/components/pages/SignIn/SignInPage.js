import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the sign-in logic here
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="signin-page">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Connexion</h2>
        
        <label htmlFor="email">E-mail *</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        
        <div className="password-reset">
          Vous avez oublié votre mot de passe ?
          <a href="/reset-password">Réinitialisez-le !</a>
        </div>
        
        <button type="submit" className="continue-btn">CONTINUER</button>
      </form>
    </div>
  );
};

export default SignInPage;
