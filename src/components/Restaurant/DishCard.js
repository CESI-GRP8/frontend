import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DishCard.css';

const DishCard = ({ id, title, description, price, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dish/${id}`);
  };

  return (
    <div className="dish-card">
      <img src={imageUrl} alt={title} className="dish-image" />
      <div className="dish-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="dish-price">{price}€</div>
        <button className="add-to-cart-button" onClick={handleClick}>Voir</button>
      </div>
    </div>
  );
};


export default DishCard;
