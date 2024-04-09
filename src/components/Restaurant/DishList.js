// DishList.js
import React from 'react';
import DishCard from './DishCard';
import { useDishes } from '../../context/DishesContext';

const DishList = () => {
  const { dishes } = useDishes(); // Utilisez les plats depuis le contexte

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          id={dish.id}
          title={dish.title}
          description={dish.description}
          price={dish.price}
          imageUrl={dish.imageUrl}
        />
      ))}
    </div>
  );
};

export default DishList;
