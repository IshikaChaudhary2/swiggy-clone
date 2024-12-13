// src/components/RestaurantItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Resturant.css'

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="restaurant-item">
      <img src={restaurant.imageUrl} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating} | Delivery in {restaurant.deliveryTime} mins</p>
      <Link to={`/restaurant/${restaurant.id}`}>View Menu</Link>
    </div>
  );
};

export default RestaurantItem;
