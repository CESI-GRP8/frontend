import React from 'react';
import './NotificationsPage.css'; // Assurez-vous que ce chemin correspond à l'emplacement de votre fichier CSS

const NotificationsPage = () => {
  // Supposons que vous ayez une liste de commandes avec leur statut
  const orders = [
    { id: 1, status: 'En cours' },
    { id: 2, status: 'En livraison' },
    { id: 3, status: 'Terminé' },
  ];

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      {orders.map(order => (
        <div key={order.id} className={`notification ${order.status.toLowerCase()}`}>
          <p>Votre commande #{order.id} est {getStatusMessage(order.status)}</p>
        </div>
      ))}
    </div>
  );
};

// Fonction utilitaire pour obtenir le message de statut approprié
const getStatusMessage = (status) => {
  switch (status) {
    case 'En cours':
      return 'en cours';
    case 'En livraison':
      return 'en livraison';
    case 'Terminé':
      return 'terminée';
    default:
      return '';
  }
};

export default NotificationsPage;
