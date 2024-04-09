import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css'; // Assurez-vous que le chemin correspond à l'emplacement de votre fichier CSS

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialisez la fonction navigate

  // Logique de paiement à intégrer ici
  const handleConfirmPayment = () => {
    // Implémentez la logique de confirmation de paiement
    console.log('Paiement confirmé');
    // Naviguez vers la page /success
    navigate('/success');
  };

  return (
    <div className="payment-page">
      <div className="payment-info">
        <h2>Paiement</h2>
        <div className="payment-detail">
          <h3>Livrée à</h3>
          <p>8 rue Victor Hugo, 76300, Sotteville-lès-Rouen <button>Changer</button></p>
        </div>
        <div className="payment-detail">
          <h3>Moyen de paiement</h3>
          <p>XXXX XXXX XXXX 7753 <a href="/paymentmethod"><button>Ajouter</button></a><button>Changer</button></p>
        </div>
        <div className="payment-total">
          <span>Prix:</span>
          <span>48,90€</span>
        </div>
        <button className="confirm-payment-button" onClick={handleConfirmPayment}>
          CONFIRMER PAIEMENT
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
