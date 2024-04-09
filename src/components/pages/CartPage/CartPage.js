import React, { useState, useEffect } from 'react';
import Cart from '../../Cart/Cart';
import CartSummary from '../../Cart/CartSummary';
import './CartPage.css';

const CartPage = () => {
  // Exemple de données de panier, normalement cela viendrait de l'état global de l'application ou d'une API
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Naan Farmer',
      price: 15.30,
      quantity: 2,
      imageUrl: 'url-to-image', // Remplacez par vos URLs d'images
    },
    // ... d'autres articles
  ]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedQuantity = Number(newQuantity);
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity: updatedQuantity >= 0 ? updatedQuantity : 0 } : item
      )
    );
  };

  const handleRemoveItem = itemId => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  // Logique pour le calcul des totaux
  const [totals, setTotals] = useState({ subtotal: 0, taxes: 0, shipping: 0, total: 0 });

  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newTaxes = newSubtotal * 0.1; // Par exemple, 10% de taxes
    const newShipping = 3.99; // Frais de livraison fixes pour l'exemple
    const newTotal = newSubtotal + newTaxes + newShipping;

    setTotals({ subtotal: newSubtotal, taxes: newTaxes, shipping: newShipping, total: newTotal });
  }, [cartItems]); // Recalculer lorsque cartItems change

  return (
    <div className="cart-page">
      <Cart 
        cartItems={cartItems} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemove={handleRemoveItem} 
      />
      <CartSummary 
        subtotal={totals.subtotal} 
        taxes={totals.taxes} 
        shipping={totals.shipping} 
        total={totals.total} 
      />
    </div>
  );
};

export default CartPage;
