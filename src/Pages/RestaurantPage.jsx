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
        imageUrl: "https://images3.alphacoders.com/104/thumb-1920-1041781.jpg"
      },
      {
        id: 2,
        name: 'Burger',
        price: 250-450,
        imageUrl:"https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg"
          },
     {
        id: 3,
        name: 'Ice Cream',
        price: 50-649,
        imageUrl: "https://cdn.wallpapersafari.com/63/99/JnAPqz.jpg"
     },
      {
        id: 4,
        name: 'Chinese',
        price: 450-800,
        imageUrl:"https://blogs-images.forbes.com/nickpassmore/files/2015/07/chinese.jpg"
          },
      {
        id: 5,
        name: 'Biriyani',
        price: 170-499,
        imageUrl: "https://sulthansbiriyani.in/wp-content/uploads/2021/01/Sulthans-special-Biryani.jpg"
      },
      {
        id: 6,
        name: 'Cold Drinks',
        price: 40-100,
        imageUrl:"https://5.imimg.com/data5/OK/LC/RZ/SELLER-49520187/fanta-cold-drink-500x500.jpg"
          },
      {
        id: 7,
        name: 'Momos',
        price: 50-299,
        imageUrl: "https://www.rasoirani.com/wp-content/uploads/2020/10/veg-paneer-momos.jpg"
        },
     {
        id: 8,
        name: 'Desserts',
        price: 80-899,
        imageUrl:"https://images6.alphacoders.com/451/451075.jpg"
          },
      {
        id: 9,
        name: 'kababs',
         price: 149-400,
        imageUrl:"https://flawlessfood.co.uk/wp-content/uploads/2021/03/Tandoori-Chicken-Tikka-Kebab-433.jpg"
          },
      {
        id: 10,
        name: 'Contininental Food',
        price: 79-650,
        imageUrl: "https://images.summitmedia-digital.com/sap/images/2017/09/11/8.beefalofriedchickenscopypot-brand-articleimage640x360.jpg"
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
