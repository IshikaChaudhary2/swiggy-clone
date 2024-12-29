// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';
import './Resturant.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
   const fetchRestaurants = async () => {
      const data = [
        {
       id: 1, 
      name: 'BURGER PIZZA',
     image: "https://img.etimg.com/thumb/msid-53174685,width-650,height-488,imgsize-536837,resizemode-75/.jpg" },
     item:[
    {
         id:1,
        name:  'PEPPERONI CHEESE PIZZA',
        description: 'Pepperoni pizza topped with fresh Mozzarella cheese',
        price: 699,
        image: "https://stock.adobe.com/in/generate/details?prompt=%22dominos+pizza%22+pepperoni+cheese+with+point+description+&aspectRatio=landscape&contentType=photo&seed=84848" 
    },
        {
          id:1,
          name: 'CHEESE N CORN',
          description: 'cheese ana golden corn',
          price: 305,
          image: "https://www.dominos.co.in//files/items/Corn_&_Cheese.jpg"
    },
        {
          id:1,
          name: 'PEPPER BAEBECUE CHICKEN',
          description: '',
          price: 455,
          image: "https://preview.redd.it/zyxwcde08f671.jpg?width=1080&crop=smart&auto=webp&s=8aec2bb7e161959a356c026ed3f1c50781408e26"
    }, 
        {
        id:1,
          name: 'BBQ CHICKEN PIZZA',
          description: 'sweet and smoky flavors,resist tangy barbecue sauce and melted cheese',
          price: 645 ,
          image: "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-SQUARE.jpg"
   },
        {
          id:1,
          name: '',
          description: '',
          price: ,
          image: ""
   },
        {
          id:1,
          name: '',
          description: '',
          price: ,
          image: ""
   },
        {
         id:1,
          name: '',
          description: '',
          price: ,
          image: ""
   },  
        {
          id:1,
          name: '',
          description: '',
          price: ,
          image: ""
  },
        {
         id:1,
          name: '',
          description: '',
          price: ,
          image: ""
  },
        {
          id:1,
          name: '',
          description: '',
          price: ,
          image: ""  
  },
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
  },
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
   }, 
        {
        id:2,
          name: '',
          description: '',
          price: ,
          image: ""
    },
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
     },       
        {  
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
     },       
        {     
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
    },      
        { 
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
    },
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
   },        
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
  },     
        {
          id:2,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
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
