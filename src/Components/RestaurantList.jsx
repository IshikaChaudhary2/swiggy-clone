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
          description: 'premium grilled chicken, crunchy fresh onions, and not one, not two, but three cheeses: mozzarella, provolone and cheddar on our hand-tossed crust.',
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
          id:2,
          name: 'Macaroni & Cheese Burger',
          description: 'A crispy-fried mac & cheese patty, grilled beef patty, grilled onion, lettuce, chili cheese sauce, and ketchup, served on a corn-dusted bun.',
          price: 185 ,
          image: "https://external-preview.redd.it/burger-king-serves-new-macaroni-cheese-lover-burgers-in-v0--jBxM7pOQpzMSgmyLF6dQ6Dqh-JVaTuLW6JaLFtxdp0.jpg?width=640&crop=smart&auto=webp&s=3656b9f2ecfd69f025b07373cd6eeea77af932ee"
   },
        {
          id:2,
          name: 'Mushroom Swiss Burger',
          description: 'A beef patty topped with sautéed mushrooms and Swiss cheese. ',
          price: 380 ,
          image: ""
   },
        {
         id:2,
          name: 'Double Decker Burger',
          description: 'Two beef patties with cheese, lettuce, and special sauce stacked high.',
          price: 400,
          image: ""
   },  
        {
          id:2,
          name: 'Tandoori Chicken Burger',
          description: ' Tandoori-marinated chicken patty with mint yogurt sauce and onions.',
          price: 370,
          image: ""
  },
        {
         id:2,
          name: 'Cheese Burst Burger',
          description: 'A beef patty topped with melted cheese, onions, and a special sauce. ',
          price: 350,
          image: ""
  },
        {
          id:2,
          name: 'Spicy Paneer Burger',
          description: 'Grilled paneer marinated in spices, served with lettuce and mint chutney.',
          price: 320,
          image: ""  
  },
        {
          id:2,
          name: 'Veggie Delight Burger',
          description: 'A flavorful vegetable patty with fresh greens, tomatoes, and a tangy sauce.',
          price: 280,
          image: ""
  },
        {
          id:2,
          name: 'Fish Fillet Burger',
          description: ' Crispy fish fillet with tartar sauce, lettuce, and pickles.',
          price: 340,
          image: ""
   }, 
        {
        id:2,
          name: 'Classic Chicken Burger',
          description: 'A juicy grilled chicken patty topped with lettuce, tomato, and mayo.',
          price: 300 ,
          image: ""
    },
        {
          id:2,
          name: 'Falafel Burger',
          description: 'A crispy falafel patty with tahini sauce, lettuce, and tomatoes.',
          price: 250,
          image: ""
     },       
        
        {  
          id:3,
          name: 'Chocolate Fudge Brownie',
          description: 'Rich chocolate ice cream swirled with chunks of fudgy brownie, perfect for chocolate lovers.',
          price: 150,
          image: ""
     },       
        {     
          id:3,
          name: 'Strawberry Swirl',
          description: 'Refreshing strawberry ice cream with a swirl of strawberry sauce, made from fresh strawberries.',
          price: 200 ,
          image: ""
    },      
        { 
          id:3,
          name: 'Mint Chocolate Chip',
          description: 'A cool mint ice cream loaded with chocolate chips, providing a refreshing and indulgent treat.',
          price: 250,
          image: ""
    },
        {
          id:3,
          name: 'Mango Mania',
          description: 'Creamy mango ice cream made with ripe mangoes, capturing the essence of summer in every scoop.',
          price: 300,
          image: ""
   },        
         {
          id:3,
          name: 'Cookies and Cream'.
          description: 'A delightful blend of vanilla ice cream with crushed chocolate cookies, creating a crunchy texture.',
          price: 350,
          image: ""
  },     
        {
          id:3,
          name: 'Pistachio Paradise',
          description: 'Smooth pistachio ice cream made with real pistachios, offering a nutty flavor and creamy consistency.',
          price: 400,
          image: ""
  },   

  {
          id:3,
          name: 'Caramel Crunch',
          description: 'Creamy caramel ice cream with crunchy caramel bits, delivering a sweet and satisfying experience.',
          price: 450,
          image: ""
  },   
        {
          id:3,
          name: 'Tiramisu Twist',
          description: 'Coffee-flavored ice cream layered with mascarpone and cocoa, inspired by the classic Italian dessert.',
          price: 500,
          image: ""
  },   
     {
          id:3,
          name: 'Rocky Road',
          description: 'A chocolate ice cream packed with marshmallows and nuts, providing a delightful mix of textures and flavors.',
          price: 600,
          image: ""
  },   
      {
         id:3,
          name: 'Sorbet',
          description: 'fruit and water, typically dairy-free.',
          price: ,
          image: ""
  },   
     
        {
          id:4,
          name: 'Sweet and Sour Pork',
          description: 'This dish features tender pieces of pork coated in a bright orange-red sweet and sour sauce, often served with bell peppers and pineapple.',
          price: 800,
          image: ""
  },   
      {
          id:4,
          name: 'Ma Po Tofu',
          description: 'A classic Sichuan dish made with soft tofu and minced meat (usually pork or beef) in a spicy sauce made from fermented black beans and chili paste.',
          price: 650,
          image: ""
  },   
     {
          id:4,
          name: 'Fried Rice',
          description: 'A versatile dish made from stir-fried rice with various ingredients such as eggs, vegetables, and meat or seafood, often enjoyed as a side or main dish.',
          price: 450,
          image: ""
  },   
       {
          id:4,
          name: 'Dim Sum',
          description: 'A collection of small dishes, including dumplings, buns, and pastries, often enjoyed with tea, perfect for sharing among friends and family.',
          price: 650,
          image: ""
  },   
       {
          id:4,
          name: 'Dumplings',
          description: 'These consist of minced meat and vegetables wrapped in thin dough, which can be boiled, steamed, or fried, making them a popular snack or appetizer.',
          price: 450,
          image: ""
  },   
       {
          id:4,
          name: 'Twice-Cooked Pork',
          description: 'A Sichuan specialty where pork is first boiled, then stir-fried with a variety of spices and vegetables, resulting in a flavorful and tender dish.',
          price: 555,
          image: ""
  },   
       {
          id:4,
          name: 'Kung Pao Chicken',
          description: 'A spicy stir-fry featuring chicken, peanuts, and vegetables, seasoned with soy sauce and chili peppers.',
          price: 480,
          image: ""
  },   
       {
          id:4,
          name: 'Spicy Seafood Noodle Soup',
          description: 'A spicy noodle soup that features a rich broth made with seafood, vegetables, and chili oil. The dish is known for its bold flavors and is often served with a variety of seafood, including shrimp, squid, and clams.',
          price: 550,
          image: ""
  },   
       {
          id:4,
          name: 'Black Bean Noodles',
          description: 'consisting of wheat noodles topped with a savory black bean sauce made from fermented black soybeans, diced pork, and vegetables. It’s often garnished with cucumber slices for a refreshing crunch.',
          price: 560,
          image: ""
  },   
       {
          id:4,
          name: 'Tom Jap Chai',
          description: 'This is a Chinese-inspired vegetable soup made by slow boiling leafy greens like cabbage and mustard greens with pork or chicken for a rich, meaty flavor. It is not spicy but is packed with umami from the long cooking process, making it a comforting dish.',
          price: 300,
          image: ""
  },   
      
        {
          id:5,
          name: 'Hyderabadi Chicken Dum Biryani',
          description: 'Marinated chicken layered with fragrant basmati rice, slow-cooked to perfection. ',
          price: 250,
          image: ""
  },   
       {
          id:5,
          name: 'Mutton Biryani',
          description: 'Tender mutton pieces cooked with aromatic spices and basmati rice, offering a rich and savory experience.',
          price: 450,
          image: ""
  },   
       {
          id:5,
          name: 'Prawn Biryani',
          description: 'A coastal delight featuring succulent prawns cooked with fragrant rice and spices, offering a taste of the sea.',
          price: 499,
          image: ""
  },   
       {
          id:5,
          name: 'Hyderabadi Chicken Dum Biryani',
          description: 'Marinated chicken layered with fragrant basmati rice, slow-cooked to perfection.',
          price: 250,
          image: ""
  },   
       {
          id:5,
          name: 'Persian Biryani',
          description: 'A rich and aromatic dish made with saffron-infused rice, tender meat, and a blend of spices, often served with yogurt.',
          price: 450,
          image: ""
  },   
       {
          id:5,
          name: 'Mutton Kacchi Biryani',
          description: ' Raw marinated mutton layered with partially cooked rice, slow-cooked to allow the flavors to meld beautifully.',
          price: 480,
          image: ""
  },   
       {
          id:5,
          name: 'Chicken Biryani',
          description: 'Juicy chicken pieces cooked with basmati rice and a mix of spices, creating a comforting and hearty meal.',
          price: 220,
          image: ""
  },   
       {
          id:5,
          name: 'Ayda Persian Kitchen Biryani',
          description: 'a blend of aromatic spices and is often served with a side of tangy raita.',
          price: 280,
          image: ""
  },   
       {
          id:5,
          name: 'Paneer Biryani ',
          description: 'A rich and creamy biryani made with paneer (Indian cottage cheese) cubes, basmati rice, and a mix of spices,by a side of yogurt or raita. ',
          price: 250,
          image: ""
  },   
       {
          id:5,
          name: 'Kuwaiti Biryani',
          description: 'A fragrant rice dish with marinated chicken or lamb, often garnished with nuts and raisins for a touch of sweetness.',
          price: 400,
          image: ""
  },   
     
        {
          id:6,
          name: 'Appy Fizz',
          description: 'A sparkling apple drink that combines the taste of apples with a fizzy twist.',
          price: 50,
          image: ""
  },   
        {
          id:6,
          name: 'Mountain Dew ',
          description: 'A citrus-flavored soft drink that is energizing and refreshing, perfect for outdoor activities.',
          price: 80,
          image: ""
  },   
       {
          id:6,
          name: 'Coca-Cola',
          description: 'A classic carbonated soft drink with a refreshing cola flavor.',
          price: 40,
          image: ""
  },   
       {
          id:6,
          name: 'Sprite',
          description: 'A lemon-lime flavored soft drink that is crisp and refreshing, ideal for hot days.',
          price: 55,
          image: ""
  },   
       {
          id:6,
          name: 'Red Bull Energy Drink',
          description: 'A popular energy drink known for its unique blend of caffeine, taurine, and B vitamins. It provides a quick energy boost and enhances alertness and concentration. The taste is slightly sweet with a hint of citrus.',
          price: 100,
          image: ""
  },   
       {
          id:6,
          name: 'Monster Energy Drink',
          description: 'A carbonated energy drink that contains caffeine, ginseng, and B vitamins, designed to boost energy and enhance performance.',
          price: 110,
          image: ""
  },   
       {
          id:6,
          name: 'Sting Energy Drink',
          description: 'A popular energy drink known for its refreshing taste and energizing properties. It contains caffeine, taurine, and B vitamins, providing a quick boost of energy and alertness.',
          price: 70,
          image: ""
  },   
       {
          id:6,
          name: 'Limca',
          description: 'A lemon-flavored soft drink that is refreshing and popular in India.',
          price: 35,
          image: ""
  },   
       {
          id:6,
          name: 'Fanta',
          description: ' A fruity orange-flavored soda that is popular for its sweet taste.',
          price: 40,
          image: ""
  },   
       {
          id:6,
          name: 'Paper Boat Ginger Lemon Sparkling Water',
          description: 'A fizzy drink with the zing of ginger and lemon, offering a refreshing and sugar-free option.',
          price: 50,
          image: ""
  },   
      
        {
          id:7,
          name: 'Veg Steam Momos',
          description: 'Soft, steamed dumplings filled with a mix of fresh vegetables and spices, served with a tangy dipping sauce.',
          price: 50,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
       {
          id:7,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
     
        {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   
        {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },   {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  },  
        {
          id:8,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 
     
        {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 
      {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 
      {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, {
          id:9,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
          name: '',
          description: '',
          price: ,
          image: ""
  }, 

{
          id:10,
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
