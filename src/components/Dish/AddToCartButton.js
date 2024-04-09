import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import './AddToCartButton.css';

const AddToCartButton = ({ onAddToCart }) => {
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleClick = () => {
    onAddToCart(); // Appelez la fonction de gestion de l'ajout au panier
    navigate('/cart'); // Redirigez l'utilisateur vers la page du panier
  };

  return (
    <button className="add-to-cart-button" onClick={handleClick}>
      AJOUTER AU PANIER
    </button>
  );
};

export default AddToCartButton;
