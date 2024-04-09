import React, { useState, useEffect } from 'react';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer les données des commandes depuis une source de données
    // Exemple d'utilisation d'une API fictive
    fetchOrders()
      .then(orders => {
        setOrders(orders);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  // Fonction pour récupérer les données des commandes
  const fetchOrders = async () => {
    // Remplacez cette fonction par la méthode de récupération des données appropriée
    // Par exemple, une requête à une API
    return new Promise(resolve => {
      setTimeout(() => {
        // Données fictives des commandes
        const orders = [
          { id: 1, date: '2024-04-09', status: 'En cours', items: ['Produit 1', 'Produit 2'] },
          { id: 2, date: '2024-04-08', status: 'Terminée', items: ['Produit 3', 'Produit 4'] },
          { id: 3, date: '2024-04-08', status: 'Terminée', items: ['Produit 3', 'Produit 4'] },
          // Ajoutez plus de données si nécessaire
        ];
        resolve(orders);
      }, 1000);
    });
  };

  // Fonction pour suivre une commande
  const trackOrder = (orderId) => {
    // Implémentez ici la logique pour suivre une commande
    console.log(`Tracking order with ID: ${orderId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders-container">
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h3>Commande #{order.id}</h3>
          <div className="order-details">
            <p>Date : {order.date}</p>
            <p>Statut : {order.status}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {order.status === 'En cours' && (
            <button className="track-order-btn" onClick={() => trackOrder(order.id)}>Suivre ma commande</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
