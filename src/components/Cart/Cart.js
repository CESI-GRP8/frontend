import React from 'react';
import CartItem from './CartItem';
import './Cart.css'; // Vous devriez créer ce fichier CSS pour styler le composant

const Cart = ({ cartItems, onUpdateQuantity, onRemove }) => {
  // Logique pour calculer les totaux, etc.

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onUpdateQuantity={onUpdateQuantity} 
          onRemove={onRemove} 
        />
      ))}
      {/* Ici vous pouvez ajouter la logique pour le sous-total, les taxes, etc. */}
    </div>
  );
};

export default Cart;
