import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderDeniedPage.css'; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier CSS

const OrderDeniedPage = () => {
  const navigate = useNavigate(); // Déclarer navigate en utilisant useNavigate

  // La logique pour suivre la commande (par exemple, navigation vers une page de suivi) serait ici

  const handleTrackOrder = () => {
    // Remplacez ceci par votre logique de suivi de commande
    console.log('Suivi de la commande');
    navigate('/suivi');
  };

  return (
    <div className="order-denied-page">
      <h1>COMMANDE REFUSÉE</h1>
      <img src="https://i.ibb.co/ns5K4Qd/logo.png" alt="Order Denied" className="denied-image" />
      <p>Désolé, votre commande a été refusée pour une raison quelconque.</p>
      <button onClick={handleTrackOrder} className="track-order-btn">RESSAYER</button>
    </div>
  );
};

export default OrderDeniedPage;
