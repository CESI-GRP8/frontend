import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <a href="/cart">
    <button className="add-to-cart-button" onClick={onAddToCart}>
      AJOUTER AU PANIER
    </button>
    </a>
  );
};



export default AddToCartButton;
