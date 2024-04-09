import React from 'react';
import './DishCard.css';

const DishCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="dish-card">
      <img src={imageUrl} alt={title} className="dish-image" />
      <div className="dish-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="dish-price">{price}€</div>
        {/* Ajoutez un bouton d'ajout au panier ici si nécessaire */}
      </div>
    </div>
  );
};

export default DishCard;
