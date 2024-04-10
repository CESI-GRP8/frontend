import React, { useState } from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserProfile } from '../../../context/UserProfileContext';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setProfile } = useUserProfile();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/1.0/accounts/login', {
        email,
        password
      });
      console.log('Response from server:', response.data);
      if (response.status === 200) {
        // Stocker le jeton d'authentification dans le localStorage
        const { token, id } = response.data;
        localStorage.setItem('token', token);
        // Stocker l'ID de l'utilisateur dans le localStorage
        localStorage.setItem('userId', id);
        // Rediriger vers la page de paiement après la connexion réussie
        navigate('/restaurant');
        console.log('UTILISATEUR ID:', id);
        console.log('LE TOKEN', token);
      }
    } catch (error) {
      console.error('Error while signing in:', error);
    }
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
