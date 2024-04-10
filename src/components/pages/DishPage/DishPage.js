// DishPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDishes } from '../../../context/DishesContext'; // Ajustez le chemin selon votre structure
import DishDetail from '../../Dish/DishDetail';
import QuantitySelector from '../../Dish/QuantitySelector';
import IngredientList from '../../Dish/IngredientList';
import SauceList from '../../Dish/SauceList';
import AddToCartButton from '../../Dish/AddToCartButton';
import { useCart } from '../../../context/CartContext';

import './DishPage.css';

const DishPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { dishes } = useDishes();
  const { id } = useParams();
  const dishData = dishes.find(dish => dish.id === parseInt(id));
  const { dispatch } = useCart();

  if (!dishData) {
    return <div>Loading...</div>; // Affichez un message de chargement ou une animation
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: dishData.id,
        name: dishData.title, // Assurez-vous que les noms des propriétés correspondent
        price: dishData.price,
        quantity,
        imageUrl: dishData.imageUrl,
      },
    });
  };

  return (
    <div className="dish-page">
      <DishDetail dish={dishData} />
      <div className="dish-interactions">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <IngredientList ingredients={dishData.ingredients || []} />
        <SauceList sauces={dishData.sauces || []} />
        <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default DishPage;
