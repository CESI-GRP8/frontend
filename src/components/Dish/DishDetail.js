import React from 'react';
import './DishDetail.css';

const DishDetail = ({ dish }) => {
  return (
    <div className="dish-detail">
      <div className="dish-image-container">
        <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
      </div>
      <div className="dish-info">
        <h2>{dish.name}</h2>
        <div className="dish-price">{dish.price}€</div>
      </div>
    </div>
  );
};

export default DishDetail;
