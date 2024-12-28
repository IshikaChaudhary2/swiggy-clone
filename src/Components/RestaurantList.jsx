// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';
import './Resturant.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
   const fetchRestaurants = async () => {
      const data = [
     { id: 1, 
      name: Domino's, Burger Pizza.
     image: "https://img.etimg.com/thumb/msid-53174685,width-650,height-488,imgsize-536837,resizemode-75/.jpg" },
     items: [
         {
           id:1,
          name:  'pepperoni cheese pizza',
          description: '
          price: 
          image:  },
     ],
    deliveryTime: 20-25mins,  
  
        ],
      setRestaurants(data);
   };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantItem className="restaurant-names" key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
