import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { usePayment } from '../../../context/PaymentContext';
import { useUserProfile } from '../../../context/UserProfileContext'; // Importez le hook useUserProfile
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartState } = useCart();
  const { cartes, carteParDefaut } = usePayment(); // Utilisez usePayment ici
  const { profile } = useUserProfile(); // Utilisez useUserProfile pour accéder aux données du profil

  const total = location.state ? location.state.total : 0;

  const handleConfirmPayment = () => {
    console.log('Paiement confirmé');
    navigate('/success');
  };

  // Récupération de l'adresse depuis le profil de l'utilisateur pour l'affichage
  const deliveryAddress = `${profile.address.streetAddress}, ${profile.address.city}, ${profile.address.country}`;

  return (
    <div className="payment-page">
      <div className="payment-info">
        <h2>Paiement</h2>
        <div className="payment-detail">
          <h3>Livrée à</h3>
          <p>{deliveryAddress} <button onClick={() => navigate('/myprofile')}>Changer</button></p>
        </div>
        <div className="payment-detail">
          <h3>Moyen de paiement</h3>
          <p>{carteParDefaut ? `${carteParDefaut.numero} - Expire le: ${carteParDefaut.dateExpiration}` : 'Aucune carte enregistrée'}</p>
          <button onClick={() => navigate('/paymentmethod')}>Changer</button>
        </div>
        <div className="payment-total">
          <span>Prix:</span>
          <span>{total.toFixed(2)}€</span>
        </div>
        <button className="confirm-payment-button" onClick={handleConfirmPayment}>
          CONFIRMER PAIEMENT
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
