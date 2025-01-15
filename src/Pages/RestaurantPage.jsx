// src/pages/RestaurantPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Res.css'; // Import the CSS for styling

const RestaurantPage = () => {
  const { id } = useParams();

  // Static data for restaurant, you can fetch this dynamically
  const restaurant = {
    name: 'Delicious Bites',
    menu: [
      {
        id: 1,
        name: 'Pizza',
        price: 200-800,
        imageUrl:
      },
      {
        id: 2,
        name: 'Burger',
        price: 250-450,
        imageUrl:
          },
     {
        id: 3,
        name: 'Ice Cream',
        price: 50-649,
        imageUrl: 
     },
      {
        id: 4,
        name: 'Burger',
        price: 120,
        imageUrl:
          },
      {
        id: 5,
        name: 'Burger',
        price: 120,
        imageUrl: 
      },
      {
        id: 6,
        name: 'Burger',
        price: 120,
        imageUrl:
          },
      {
        id: 7,
        name: 'Burger',
        price: 120,
        imageUrl: 
        },
     {
        id: 8,
        name: 'Burger',
        price: 120,
        imageUrl:
          },
      {
        id: 9,
        name: 'Burger',
         price: 120,
        imageUrl:
          },
      {
        id: 10,
        name: 'Burger',
        price: 120,
        imageUrl: 
      },
    ],
  };

  return (
    <div className="restaurant-page">
      <div className="restaurant-header">
        <div className="restaurant-info">
          <h2>{restaurant.name}</h2>
          <p>Enjoy delicious meals delivered right to your doorstep!</p>
        </div>
      </div>

      <h3>Menu</h3>
      <div className="menu-list">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.imageUrl} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
