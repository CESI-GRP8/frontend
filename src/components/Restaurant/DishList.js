import React from 'react';
import DishCard from './DishCard';
import './DishList.css';

// Supposons que vous ayez un tableau de plats pour ce restaurant
const dishes = [
  {
    id: 1,
    title: 'Naan Farmer',
    description: '2 steaks, 2 cheddar, œuf, jambon de dinde, tender',
    price: 15.30,
    imageUrl: '/path-to-image.jpg',
  },
  {
    id: 1,
    title: 'Naan Farmer',
    description: '2 steaks, 2 cheddar, œuf, jambon de dinde, tender',
    price: 15.30,
    imageUrl: '/path-to-image.jpg',
  },
  // ... d'autres plats
];

const DishList = () => {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
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
