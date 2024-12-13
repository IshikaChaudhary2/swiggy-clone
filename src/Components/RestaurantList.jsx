// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';
import './Resturant.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // For simplicity, we use a static array of restaurant data
    const fetchRestaurants = async () => {
      const data = [
        { id: 1, name: "Pizza Hut", rating: 4.5, deliveryTime: 30, imageUrl: "https://static.wixstatic.com/media/b15dd2_6ea8c083a58e4457a72d5436ee04ce1e~mv2.jpg/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/b15dd2_6ea8c083a58e4457a72d5436ee04ce1e~mv2.jpg" },
        { id: 2, name: "Domino's", rating: 4.2, deliveryTime: 25, imageUrl: "https://th.bing.com/th/id/OIP.26a7bVS0Iwsq6-AC76neFgHaFj?rs=1&pid=ImgDetMain" },
        { id: 3, name: "Burger King", rating: 4.0, deliveryTime: 35, imageUrl: "https://th.bing.com/th/id/R.a631e9ab0757b695e86dbff7a1317619?rik=JKKQlYgOt8as%2fw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbe%2fBurger_King_in_London.jpg&ehk=Wpijyjj56OInxu4ZPMjLuf9ztESGjfjm3BUTujg%2f1Fo%3d&risl=&pid=ImgRaw&r=0" },
      ];
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
