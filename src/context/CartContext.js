// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initialiser le contexte du panier
const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log("Reducer action:", action); // Voir l'action reçue

  switch (action.type) {
    case 'ADD_ITEM':
      // Vérifie si l'article est déjà dans le panier
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        // Article déjà présent, mise à jour de la quantité
        const newItems = state.items.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        return { ...state, items: newItems };
      } else {
        // Article non présent, ajout au panier
        return { ...state, items: [...state.items, action.payload] };
      }
    case 'UPDATE_QUANTITY':
      // Mise à jour de la quantité d'un article spécifique
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, items: updatedItems };
    case 'REMOVE_ITEM':
      // Suppression d'un article du panier
      const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
      return { ...state, items: filteredItems };
    default:
      return state;
  }
};



// Fournir le contexte et le reducer aux composants enfants
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
