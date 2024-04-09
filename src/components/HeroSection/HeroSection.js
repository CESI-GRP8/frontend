// HeroSection.js
import React from 'react';
import './HeroSection.css'; // Link to your CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to CES'EAT</h1>
      <p>Vos plats préférés livrés rapidement à votre porte.</p>
      <a href="/signin"><button className="delivery-btn">ME FAIRE LIVRER</button></a>
    </div>
  );
};

export default HeroSection;
