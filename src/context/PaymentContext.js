// PaymentContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [cartes, setCartes] = useState(() => {
    // Charger les cartes bancaires depuis le stockage local au démarrage de l'application
    const localData = localStorage.getItem('cartesBancaires');
    return localData ? JSON.parse(localData) : [];
  });
  const [carteParDefaut, setCarteParDefaut] = useState(null);

  // Sauvegarder les cartes bancaires dans le stockage local à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cartesBancaires', JSON.stringify(cartes));
  }, [cartes]);

  return (
    <PaymentContext.Provider value={{ cartes, setCartes, carteParDefaut, setCarteParDefaut }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
