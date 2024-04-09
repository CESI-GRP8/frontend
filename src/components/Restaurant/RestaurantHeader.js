import React from 'react';
import './RestaurantHeader.css';

const RestaurantHeader = ({ name, description, imageUrl }) => {
  return (
    <div className="restaurant-header" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>{name}</h1>
      <p>{description}</p>
      {/* Ajoutez plus de détails si nécessaire */}
    </div>
  );
};

export default RestaurantHeader;
