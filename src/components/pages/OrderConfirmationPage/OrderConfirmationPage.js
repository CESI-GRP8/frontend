import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmationPage.css'; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier CSS

const OrderConfirmationPage = () => {
  const navigate = useNavigate(); // Déclarer navigate en utilisant useNavigate

  // La logique pour suivre la commande (par exemple, navigation vers une page de suivi) serait ici

  const handleTrackOrder = () => {
    // Remplacez ceci par votre logique de suivi de commande
    console.log('Suivi de la commande');
    navigate('/suivi');
  };

  return (
    <div className="order-confirmation-page">
      <h1>COMMANDE CONFIRMÉE</h1>
      <img src="https://i.ibb.co/ns5K4Qd/logo.png" alt="Confirmation" className="confirmation-image" />
      <p>Accrochez-vous bien ! Nous avons reçu votre commande et nous vous la ferons parvenir dès que possible !</p>
      <button onClick={handleTrackOrder} className="track-order-btn">SUIVRE MA COMMANDE</button>
    </div>
  );
};

export default OrderConfirmationPage;
