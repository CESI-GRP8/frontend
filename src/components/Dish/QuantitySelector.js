import React, { useState } from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, setQuantity }) => {
  console.log(setQuantity); // Ajoutez ce log pour vérifier si setQuantity est une fonction

  const increaseQuantity = () => {
    console.log("Augmenter la quantité"); // Pour debugger
    setQuantity(q => q + 1);
  };

  const decreaseQuantity = () => {
    console.log("Diminuer la quantité"); // Pour debugger
    setQuantity(q => q > 1 ? q - 1 : 1);
  };

  return (
    <div className="quantity-selector">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};




export default QuantitySelector;
