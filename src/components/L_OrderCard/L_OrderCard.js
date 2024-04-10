import React from 'react';
import './L_OrderCard.css'; // Importez votre fichier CSS

const L_OrderCard = ({ order, onAccept, onReject, onCancel, isDeliverTab }) => {
  return (
    <div className="order-card">
      <h2>{order.firstName} {order.lastName}</h2>
      <p><strong>Adresse de livraison:</strong> {order.address}</p>
      <p><strong>Date et heure:</strong> {order.dateTime}</p>
      <p><strong>Contenu de la commande:</strong> {order.items.join(', ')}</p>
      <p><strong>Prix de la livraison:</strong> {order.price} €</p>
      <div className="buttons">
        {!isDeliverTab ? (
          <>
            <button onClick={onCancel}>Annuler</button> {/* Bouton Annuler pour l'onglet "Commandes disponibles" */}
            <button onClick={onAccept}>Accepter</button>
          </>
        ) : (
          <button onClick={onAccept}>Itinéraire</button> 
        )};
      </div>
    </div>
  );
};

export default L_OrderCard;
