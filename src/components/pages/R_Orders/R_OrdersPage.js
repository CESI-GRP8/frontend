import React, { useState } from 'react';

function R_Orders() {
  // State pour suivre les nouvelles commandes
  const [newOrders, setNewOrders] = useState([]);
  // State pour suivre les commandes en cours
  const [currentOrders, setCurrentOrders] = useState([]);
  // State pour suivre l'onglet actif (0 pour Nouvelle Commande, 1 pour Commande en cours)
  const [activeTab, setActiveTab] = useState(0);

  // Fonction pour ajouter une nouvelle commande
  const addNewOrder = () => {
    const newOrder = {
      firstName: 'John', // Prénom de la personne (peut être remplacé par une valeur dynamique)
      lastName: 'Doe', // Nom de la personne (peut être remplacé par une valeur dynamique)
      date: new Date().toLocaleDateString(), // Date du jour
      time: new Date().toLocaleTimeString(), // Heure actuelle
      orderNumber: Math.floor(Math.random() * 1000), // Numéro de commande aléatoire (pour l'exemple)
    };
    setNewOrders([...newOrders, newOrder]);
  };

  // Fonction pour annuler une commande
  const cancelOrder = (index) => {
    const updatedOrders = [...newOrders];
    updatedOrders.splice(index, 1);
    setNewOrders(updatedOrders);
  };

  // Fonction pour valider une commande
  const validateOrder = (index) => {
    const validatedOrder = newOrders[index];
    setCurrentOrders([...currentOrders, validatedOrder]); // Transférer la commande vers "Commande en cours"
    cancelOrder(index); // Supprimer la commande de la liste "Nouvelle Commande"
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <h1></h1>
        <div>
          <h2>Onglets</h2>
          <ul>
            <li onClick={() => setActiveTab(0)} style={{ cursor: 'pointer', textDecoration: activeTab === 0 ? 'underline' : 'none' }}>Nouvelle Commande</li>
            <li onClick={() => setActiveTab(1)} style={{ cursor: 'pointer', textDecoration: activeTab === 1 ? 'underline' : 'none' }}>Commande en cours</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: 2 }}>
        {activeTab === 0 && (
          <div>
            <h2>Nouvelle Commande</h2>
            <button onClick={addNewOrder}>Ajouter une nouvelle commande</button>
            <ul>
              {newOrders.map((order, index) => (
                <li key={index}>
                  <div>Nom: {order.firstName} {order.lastName}</div>
                  <div>Date et heure: {order.date} {order.time}</div>
                  <div>Numéro de commande: {order.orderNumber}</div>
                  <button onClick={() => cancelOrder(index)}>Annuler</button>
                  <button onClick={() => validateOrder(index)}>Valider</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h2>Commande en cours</h2>
            <ul>
              {currentOrders.map((order, index) => (
                <li key={index}>
                  <div>Nom: {order.firstName} {order.lastName}</div>
                  <div>Date et heure: {order.date} {order.time}</div>
                  <div>Numéro de commande: {order.orderNumber}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default R_Orders;
