import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        {/* Add other restaurant details here */}
      </div>
      {/* ... */}
    </div>
    
  );
};

export default RestaurantCard;
