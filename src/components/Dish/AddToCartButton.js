import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button className="add-to-cart-button" onClick={onAddToCart}>
      AJOUTER AU PANIER
    </button>
  );
};



export default AddToCartButton;
