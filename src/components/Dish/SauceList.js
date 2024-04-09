import React from 'react';
import './SauceList.css';

const SauceList = ({ sauces }) => {
  return (
    <div className="sauce-list">
      <h3>Sauces</h3>
      <ul>
        {sauces.map((sauce, index) => (
          <li key={index}>{sauce}</li>
        ))}
      </ul>
    </div>
  );
};



export default SauceList;
