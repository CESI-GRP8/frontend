import React from 'react';
import SearchBar from '../../ClientHome/SearchBar';
import CategoryFilter from '../../ClientHome/CategoryFilter';
import RestaurantList from '../../ClientHome/RestaurantList';
import './ClientHomePage.css';

const ClientHomePage = () => {
  // Dummy data, replace with real data
  const featuredRestaurants = [{ id: 1, name: 'Chicken street', image: 'path-to-image' },{ id: 1, name: 'Chicken street', image: 'path-to-image' },{ id: 1, name: 'Chicken street', image: 'path-to-image' }];
  const nearbyRestaurants = [{ id: 2, name: 'Burger Place', image: 'path-to-image' }, /* ... more restaurants ... */];

  return (
    <div className="client-home-page">
      <SearchBar />
      <CategoryFilter />
      <RestaurantList title="Restaurants vedettes" restaurants={featuredRestaurants} />
      <RestaurantList title="Restaurants à proximité" restaurants={nearbyRestaurants} />
    </div>
  );
};

export default ClientHomePage;
