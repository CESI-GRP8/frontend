import React, { useState } from 'react';
import DishDetail from '../../Dish/DishDetail';
import QuantitySelector from '../../Dish/QuantitySelector';
import IngredientList from '../../Dish/IngredientList';
import SauceList from '../../Dish/SauceList';
import AddToCartButton from '../../Dish/AddToCartButton';
import { useCart } from '../../../context/CartContext';
import './DishPage.css';

const DishPage = () => {
  const [quantity, setQuantity] = useState(1); // Initialiser la quantité
  const { dispatch } = useCart(); // Utiliser le dispatch du contexte du panier
  const dishData = {
    id: 123, // ID unique du plat
    name: 'Naan Farmer',
    price: 15.30,
    ingredients: ['Salade', 'Tomates', 'Oignons'],
    sauces: ['Biggy', 'Mayonnaise', 'Ketchup'],

  };
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: dishData.id,
        name: dishData.name,
        price: dishData.price,
        quantity,
        imageUrl: dishData.imageUrl, // Assurez-vous d'inclure l'URL de l'image
      },
    });
  };
  

  return (
    <div className="dish-page">


      <DishDetail dish={dishData} />
      <div className="dish-interactions">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <IngredientList ingredients={dishData.ingredients} />
      <SauceList sauces={dishData.sauces} />
      <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};
export default DishPage;
