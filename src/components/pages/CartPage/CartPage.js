// CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { useCart } from '../../../context/CartContext'; // Assurez-vous que le chemin est correct
import Cart from '../../Cart/Cart';
import CartSummary from '../../Cart/CartSummary';
import './CartPage.css';

const CartPage = () => {
  const { cartState, dispatch } = useCart();
  const navigate = useNavigate(); // Initialisez la fonction navigate

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: itemId, quantity: Number(newQuantity) },
    });
  };

  const handleRemoveItem = itemId => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id: itemId },
    });
  };

  const subtotal = cartState.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1; // Par exemple, 10% de taxes
  const shipping = 3.99; // Frais de livraison fixes pour l'exemple
  const total = subtotal + taxes + shipping;



  return (
    <div className="cart-page">
      <Cart 
        cartItems={cartState.items} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemove={handleRemoveItem} 
      />
      <CartSummary 
        subtotal={subtotal} 
        taxes={taxes} 
        shipping={shipping} 
        total={total} 
      />
    </div>
  );
};

export default CartPage;
