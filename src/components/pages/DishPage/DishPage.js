import React, { useState } from 'react';
import DishDetail from '../../Dish/DishDetail';
import QuantitySelector from '../../Dish/QuantitySelector';
import IngredientList from '../../Dish/IngredientList';
import SauceList from '../../Dish/SauceList';
import AddToCartButton from '../../Dish/AddToCartButton';
import './DishPage.css';

const DishPage = () => {
  const [quantity, setQuantity] = useState(1); // Initialiser la quantité
  const dishData = {
    id: 123, // ID unique du plat
    name: 'Naan Farmer',
    price: 15.30,
    ingredients: ['Salade', 'Tomates', 'Oignons'],
    sauces: ['Biggy', 'Mayonnaise', 'Ketchup'],
    // ...autres détails du plat
  };
  const handleAddToCart = () => {
    // Logique d'ajout au panier
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
