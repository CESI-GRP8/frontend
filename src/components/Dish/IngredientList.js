import React from 'react';
import './IngredientList.css';

const IngredientList = ({ ingredients }) => {
  return (
    <div className="ingredient-list">
      <h3>Ingrédients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
