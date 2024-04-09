import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Trouver un plat ou un restaurant..." />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
