import React, { useState } from 'react';
import L_OrderCard from '../../L_OrderCard/L_OrderCard';
import './L_DeliveryAvailable.css'; // Importez votre fichier CSS

const L_DeliveryAvailable = () => {
  const [activeTab, setActiveTab] = useState('available');

  const [ordersAvailable, setOrdersAvailable] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main Street',
      dateTime: '2024-04-10 10:00',
      items: ['Pizza', 'Salad'],
      price: 10,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm Street',
      dateTime: '2024-04-10 11:30',
      items: ['Burger', 'Fries', 'Drink'],
      price: 8,
    },
  ]);

  const [ordersToDeliver, setOrdersToDeliver] = useState([]);

  const handleAccept = (orderId) => {
    const acceptedOrder = ordersAvailable.find(order => order.id === orderId);
    const updatedAvailableOrders = ordersAvailable.filter(order => order.id !== orderId);
    setOrdersAvailable(updatedAvailableOrders);
    setOrdersToDeliver([...ordersToDeliver, acceptedOrder]);
  };

  const handleReject = (orderId) => {
    console.log('Commande refusée :', orderId);
  };

  const handleCancel = (orderId) => {
    const updatedAvailableOrders = ordersAvailable.filter(order => order.id !== orderId);
    setOrdersAvailable(updatedAvailableOrders);
  };

  return (
    <div className="delivery-available">
      <div className="tabs">
        <button className="tab-button" onClick={() => setActiveTab('available')}>
          Commandes disponibles
        </button>
        <button className="tab-button" onClick={() => setActiveTab('toDeliver')}>
          Commandes à livrer
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'available' && (
          <div className="orders-available">
            <h2>Commandes disponibles</h2>
            {ordersAvailable.map((order) => (
              <L_OrderCard
                key={order.id}
                order={order}
                onAccept={() => handleAccept(order.id)}
                onCancel={() => handleCancel(order.id)} // Passer handleCancel en tant que prop
                isDeliverTab={false}
              />
            ))}
          </div>
        )}
        {activeTab === 'toDeliver' && (
          <div className="orders-to-deliver">
            <h2>Commandes à livrer</h2>
            {ordersToDeliver.map((order) => (
              <L_OrderCard
                key={order.id}
                order={order}
                onAccept={() => handleAccept(order.id)}
                onReject={() => handleReject(order.id)}
                isDeliverTab={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default L_DeliveryAvailable;
