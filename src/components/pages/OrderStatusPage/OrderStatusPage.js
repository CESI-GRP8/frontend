// OrderStatusPage.js
import React, { useState } from 'react';
import './OrderStatusPage.css'; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier CSS

// Enumération simple pour les statuts de commande
const ORDER_STATUS = {
  PREPARING: { label: "En cours de préparation", color: "blue" },
  DELIVERING: { label: "En cours de livraison", color: "orange" },
  DELIVERED: { label: "Livré", color: "green" },
  WAITING: { label: "Vous attend devant", color: "red" },
};

const OrderStatusPage = () => {
  // État local pour suivre le statut de la commande
  const [orderStatus, setOrderStatus] = useState(ORDER_STATUS.PREPARING);

  // Exemple de commande - vous le remplacerez par vos propres données, probablement venant de l'état global ou d'une API
  const order = {
    id: "1234",
    items: [
      { name: "Naan Farmer", quantity: 2, price: 15.30 },
      // ... autres articles
    ],
    total: 48.90,
    status: orderStatus, // L'état actuel de la commande
  };

  // Simuler une mise à jour du statut de la commande
  const updateOrderStatus = (newStatus) => {
    setOrderStatus(newStatus);
  };

  return (
    <div className="order-status-page">
      <h1>Statut de la Commande</h1>
      <div className="order-details">
        <p>Commande #{order.id}</p>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>{item.quantity} x {item.name}</li>
          ))}
        </ul>
        <p>Total: {order.total}€</p>
      </div>
      <div className="order-status">
        <p>Statut: <strong>{order.status.label}</strong></p>
        <button
          onClick={() => {/* logique pour suivre la commande ou une autre action */}}
          style={{ backgroundColor: order.status.color }}
        >
          {order.status.label}
        </button>
      </div>
    </div>
  );
};

export default OrderStatusPage;
