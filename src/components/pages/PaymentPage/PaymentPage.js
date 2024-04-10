import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../../context/CartContext';
import { usePayment } from '../../../context/PaymentContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartState } = useCart();
  const { cartes, carteParDefaut } = usePayment();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const total = location.state ? location.state.total : 0;

  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        // Récupérer l'ID de l'utilisateur depuis le localStorage
        const userId = localStorage.getItem('userId');
        if (userId) {
          // Effectuer une requête GET à l'API pour récupérer l'adresse de livraison de l'utilisateur
          console.log("LE USER ID EST:", userId);
          const response = await axios.get(`http://localhost/1.0/accounts/users/${userId}`);
          // Mettre à jour l'état avec l'adresse récupérée
          setDeliveryAddress(response.data[0].address); // Modification ici
          console.log("LADRESSE EST:", response.data[0].address); // Modification ici
        }
      } catch (error) {
        console.error('Error while fetching user address:', error);
      }
    };

    fetchUserAddress();
  }, []);

  const handleConfirmPayment = () => {
    console.log('Paiement confirmé');
    navigate('/success');
  };

  return (
    <div className="payment-page">
      <div className="payment-info">
        <h2>Paiement</h2>
        <div className="payment-detail">
          <h3>Livrée à</h3>
          <p>{deliveryAddress}</p>
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
