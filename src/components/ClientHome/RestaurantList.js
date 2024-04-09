import React from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <div className="restaurant-list">
      <h2>{title}</h2>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      {/* ... */}
    </div>
  );
};

export default RestaurantList;
