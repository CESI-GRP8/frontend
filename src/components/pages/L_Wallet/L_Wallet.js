import React, { useState } from 'react';
import './L_Wallet.css'; // Importez votre fichier CSS

const L_Wallet = () => {
  // Définir l'état initial des livraisons de nourriture
  const [foodDeliveries, setFoodDeliveries] = useState([
    { id: 1, restaurant: "Restaurant A", amount: 25 },
    { id: 2, restaurant: "Restaurant B", amount: 30 },
    { id: 3, restaurant: "Restaurant C", amount: 20 },
  ]);

  // Calculer le total de l'argent gagné
  const totalAmount = foodDeliveries.reduce((total, delivery) => total + delivery.amount, 0);

  // État local pour gérer l'affichage de la popup
  const [showPopup, setShowPopup] = useState(false);

  // Gérer l'ouverture de la popup
  const handleWithdrawClick = () => {
    setShowPopup(true);
  };

  // Gérer la fermeture de la popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="l-wallet">
      <h1>Résumé des livraisons</h1>
      <div className="total-amount">
        <span className="total-amount-value">{totalAmount} €</span>
      </div>
      <div className="delivery-list">
        {foodDeliveries.map(delivery => (
          <div key={delivery.id} className="delivery-item">
            <p>Restaurant : {delivery.restaurant}</p>
            <p>Montant : {delivery.amount} €</p>
          </div>
        ))}
      </div>
      <button className="withdraw-btn" onClick={handleWithdrawClick}>Retrait portefeuille</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>Retrait portefeuille</h2>
            <form className="withdraw-form">
              <label>
                IBAN*:
                <input type="text" required />
              </label>
              <br />
              <label>
                BIC / SWIFT*:
                <input type="text" required />
              </label>
              <br />
              <button className="confirm-btn">Confirmer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default L_Wallet;
