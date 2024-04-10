import React, { useState } from 'react';
import './R_OrdersPage.css'; // Import du fichier CSS pour ce composant

function R_Orders() {
  // State pour suivre les nouvelles commandes
  const [newOrders, setNewOrders] = useState([]);
  // State pour suivre les commandes en cours
  const [currentOrders, setCurrentOrders] = useState([]);
  // State pour suivre l'onglet actif (0 pour Nouvelle Commande, 1 pour Commande en cours, 2 pour Historique des commandes)
  const [activeTab, setActiveTab] = useState(0);
  // State pour suivre l'historique des commandes
  const [orderHistory, setOrderHistory] = useState([]);

  // Fonction pour ajouter une nouvelle commande
  const addNewOrder = () => {
    const newOrder = {
      firstName: 'John', // Prénom de la personne (peut être remplacé par une valeur dynamique)
      lastName: 'Doe', // Nom de la personne (peut être remplacé par une valeur dynamique)
      date: new Date().toLocaleDateString(), // Date du jour
      time: new Date().toLocaleTimeString(), // Heure actuelle
      orderNumber: Math.floor(Math.random() * 1000), // Numéro de commande aléatoire (pour l'exemple)
      items: [ // Détails de la commande
        { name: 'Produit 1', price: 10 },
        { name: 'Produit 2', price: 20 },
        { name: 'Produit 3', price: 15 },
      ],
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

  // Fonction pour transférer une commande de "Commande en cours" vers "Historique des commandes"
  const transferToOrderHistory = (index) => {
    const order = currentOrders[index];
    setOrderHistory([...orderHistory, order]); // Ajouter la commande à l'historique
    setCurrentOrders(currentOrders.filter((_, i) => i !== index)); // Supprimer la commande de la liste "Commande en cours"
  };

  return (
    <div className="orders-container">
      <div className="tabs-container">
        <ul>
          <li className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>Nouvelle Commande</li>
          <li className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>Commande en cours</li>
          <li className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>Historique des commandes</li>
        </ul>
      </div>
      <div className="orders-list">
        {activeTab === 0 && (
          <div>
            <h2>Nouvelle Commande</h2>
            <button onClick={addNewOrder}>Ajouter une nouvelle commande</button>
            <ul>
              {newOrders.map((order, index) => (
                <li key={index} className="order-item">
                  <div>Nom: {order.firstName} {order.lastName}</div>
                  <div>Date et heure: {order.date} {order.time}</div>
                  <div>Numéro de commande: {order.orderNumber}</div>
                  <div>Détails de la commande:</div>
                  <ul>
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name} - {item.price}€</li>
                    ))}
                  </ul>
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
                <li key={index} className="order-item">
                  <div>Nom: {order.firstName} {order.lastName}</div>
                  <div>Date et heure: {order.date} {order.time}</div>
                  <div>Numéro de commande: {order.orderNumber}</div>
                  <div>Détails de la commande:</div>
                  <ul>
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name} - {item.price}€</li>
                    ))}
                  </ul>
                  <button onClick={() => transferToOrderHistory(index)}>Commande préparée</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2>Historique des commandes</h2>
            <ul>
              {orderHistory.map((order, index) => (
                <li key={index} className="order-item">
                  <div>Nom: {order.firstName} {order.lastName}</div>
                  <div>Date et heure: {order.date} {order.time}</div>
                  <div>Numéro de commande: {order.orderNumber}</div>
                  <div>Détails de la commande:</div>
                  <ul>
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name} - {item.price}€</li>
                    ))}
                  </ul>
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
