// src/pages/Home.js
import React from 'react';
import Header from '../Components/Header';
import RestaurantList from '../Components/RestaurantList';
const Home = () => {
  return (
    <div>
      <Header />
      <h2>Discover Restaurants</h2>
      <RestaurantList />
    </div>
  );
};

export default Home;
