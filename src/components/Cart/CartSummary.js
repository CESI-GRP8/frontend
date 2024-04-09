import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import './CartSummary.css';

const CartSummary = ({ subtotal, taxes, shipping, total }) => {
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleCheckout = () => {
    // Naviguer vers la page de paiement avec les informations sur le prix
    navigate('/payment', {
      state: { subtotal, taxes, shipping, total }
    });
  };

  // Fonction pour arrondir les valeurs à deux décimales
  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  return (
    <div className="cart-summary">
      <div className="cart-summary-item">
        <span>Sous-total</span>
        <span>{formatPrice(subtotal)}€</span>
      </div>
      <div className="cart-summary-item">
        <span>Taxes et Frais</span>
        <span>{formatPrice(taxes)}€</span>
      </div>
      <div className="cart-summary-item">
        <span>Livraison</span>
        <span>{formatPrice(shipping)}€</span>
      </div>
      <div className="cart-summary-total">
        <span>Total</span>
        <span>{formatPrice(total)}€</span>
      </div>
      {/* Utiliser la fonction handleCheckout au lieu de href */}
      <button className="cart-summary-checkout" onClick={handleCheckout}>COMMANDER</button>
    </div>
  );
};

export default CartSummary;
