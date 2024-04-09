import React from 'react';
import QuantitySelector from '../Dish/QuantitySelector';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      </div>
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <div className="cart-item-details">
          <p className="cart-item-price">{item.price}€</p>
          <button className="cart-item-remove" onClick={() => onRemove(item.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
