import React from 'react';
import './CartSummary.css'; // Vous devriez créer ce fichier CSS pour styler le composant

const CartSummary = ({ subtotal, taxes, shipping, total }) => {
  return (
    <div className="cart-summary">
      <div className="cart-summary-item">
        <span>Sous-total</span>
        <span>{subtotal}€</span>
      </div>
      <div className="cart-summary-item">
        <span>Taxes et Frais</span>
        <span>{taxes}€</span>
      </div>
      <div className="cart-summary-item">
        <span>Livraison</span>
        <span>{shipping}€</span>
      </div>
      <div className="cart-summary-total">
        <span>Total</span>
        <span>{total}€</span>
      </div>
      <button className="cart-summary-checkout">COMMANDER</button>
    </div>
  );
};

export default CartSummary;
