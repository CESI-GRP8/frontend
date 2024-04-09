import React from 'react';
import RestaurantHeader from '../../Restaurant/RestaurantHeader';
import DishList from '../../Restaurant/DishList';

// Importez d'autres composants si nécessaire

const RestaurantPage = () => {
  // Ici, vous passerez les données du restaurant au composant RestaurantHeader
  // et les données des plats au composant DishList
  return (
    <>
      <RestaurantHeader name="Chicken Street" description="Fast Food" imageUrl="url-to-image" />
      <DishList />
      {/* Autres composants comme le menu ou les avis des utilisateurs */}
    </>
  );
};

export default RestaurantPage;
