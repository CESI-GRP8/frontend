// DishesContext.js
import React, { createContext, useContext, useState } from 'react';

const DishesContext = createContext();

export const DishesProvider = ({ children }) => {
  const [dishes, setDishes] = useState([
    {
        id: 1,
        title: 'Naan Farmer',
        description: '2 steaks, 2 cheddar, œuf, jambon de dinde, tender',
        price: 15.30,
        imageUrl: '/path-to-image.jpg',
        ingredients: ['Steak', 'Cheddar', 'Œuf', 'Jambon de dinde', 'Salade', 'Tomate'],
        sauces: ['Mayo'], // Uniquement mayo pour le Naan Farmer
    },
      {
        id: 2,
        title: 'Naan Kebab',
        description: 'Kebab, salade, tomate, oignon, sauce au choix',
        price: 12.99,
        imageUrl: '/path-to-another-image.jpg',
        ingredients: ['Kebab', 'Salade', 'Tomate', 'Oignon'],
        sauces: ['Blanche'], // Uniquement sauce blanche pour le Naan Kebab
    },
    // Ajoutez d'autres plats comme nécessaire
  ]);

  return (
    <DishesContext.Provider value={{ dishes, setDishes }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {
  const context = useContext(DishesContext);
  if (context === undefined) {
    throw new Error('useDishes must be used within a DishesProvider');
  }
  return context;
};
