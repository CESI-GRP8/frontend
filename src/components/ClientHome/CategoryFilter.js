import React from 'react';
import './CategoryFilter.css';

const categories = [
  { name: 'Hamburger', icon: '🍔' }, // Add the correct path to your icons
  { name: 'Dessert', icon: '🍩' },
  { name: 'Pizza', icon: '🍕' },
  // ... other categories
];

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category.name}>
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
