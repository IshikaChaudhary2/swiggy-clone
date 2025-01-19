// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';
import './Resturant.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
   const fetchRestaurants = async () => {
      const data = [
  
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
          id:1,
          name: 'Indi Tandoori Paneer Pizza',
          description: 'Infused with tandoori flavors, this pizza is topped with marinated paneer, onions, and capsicum for a spicy kick.',
          price: 339,
          image: "https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg"
    },
        {
          id:1,
          name: 'Farmhouse Pizza ',
          description: 'A hearty pizza with a mix of fresh vegetables and cheese, ideal for a wholesome meal.',
          price: 299,
          image: "https://img.restaurantguru.com/w550/h367/rac3-FarmHouse-Pizza-pizza-2021-09-14.jpg" },
        {
          id:1,
          name: 'Cheese Burst Pizza',
          description: 'A cheesy delight with a burst of cheese in the crust, topped with your choice of toppings.',
          price: 399,
          image: "https://assets.faasos.io/ovenstory-react.in/production/chickenCheeseBurstPizza.jpg"
    },
        {
          id:1,
          name: 'Chicken Pepperoni Cheese Burst Pizza',
          description: 'A classic American-style pizza topped with spicy pepperoni and extra cheese, perfect for a satisfying meal.',
          price: 349,
          image: "https://product-assets.faasos.io/production/product/image_1658348000078_Chicken_Pepperoni_Cheese_Burst_Pizza_.jpg"
    },
        {
          id:1,
          name: 'Sriracha Bbq Chicken Pizza',
          description: 'A delicious combination of  bell peppers, onion, and crumbled bacon perfect for those who enjoy a spicy kick.',
          price: 299,
          image: "https://i.pinimg.com/originals/38/a2/8f/38a28f18177be0ce7cde298a2a6cf759.jpg"
    },
        {
          id:1,
          name: 'Peri-Peri Chicken Pizza',
          description: 'A spicy option with peri-peri marinated chicken, bell peppers, Capsicum, Paneer and a zesty sauce, ideal for those who love heat.',
          price: 329,
          image: "https://cdn.grofers.com/assets/search/usecase/banner/peri_peri_chicken_pizza_01.png"
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
          image: "https://media.istockphoto.com/id/539659420/photo/mushroom-swiss-burger.jpg?s=612x612&w=0&k=20&c=jMNa1F6VJmUGvDafmgumvBqtWvFhyIPdgmvcxGKHWiM="
   },
        {
         id:2,
          name: 'Double Decker Burger',
          description: 'Two beef patties with cheese, lettuce, and special sauce stacked high.',
          price: 400,
          image: "https://www.shutterstock.com/image-photo/spectacular-doubledecker-burger-crispy-beef-600nw-2042006639.jpg"
   },  
        {
          id:2,
          name: 'Tandoori Chicken Burger',
          description: ' Tandoori-marinated chicken patty with mint yogurt sauce and onions.',
          price: 370,
          image: "https://img.freepik.com/premium-photo/tandoori-chicken-sandwich-burger-with-traditional-spices_641503-89129.jpg"
  },
        {
         id:2,
          name: 'Cheese Burst Burger',
          description: 'A beef patty topped with melted cheese, onions, and a special sauce. ',
          price: 350,
          image: "https://b.zmtcdn.com/data/dish_photos/f69/91af9363bf0dc5a730125e7bbb5d1f69.jpg"
  },
        {
          id:2,
          name: 'Spicy Paneer Tikka Burger',
          description: 'Grilled paneer marinated in Tikka,spices and served with lettuce and mint chutney.',
          price: 320,
          image: "https://img.freepik.com/premium-photo/spicy-paneer-tikka-burger-white-background-paneer-tikka-image-photography_1020697-118615.jpg"  
  },
        {
          id:2,
          name: 'Veggie Delight Burger',
          description: 'A flavorful vegetable patty with fresh greens, tomatoes, and a tangy sauce.',
          price: 280,
          image: "https://png.pngtree.com/thumb_back/fh260/background/20241124/pngtree-juicy-beef-burger-delight-image_16636987.jpg"
  },
        {
          id:2,
          name: 'Fish Fillet Burger',
          description: ' Crispy fish fillet with tartar sauce, lettuce, and pickles.',
          price: 340,
          image: "https://plantbasednews.org/app/uploads/2024/11/plant-based-news-terris-fish-fillet-sandwich.jpg"
   }, 
        {
        id:2,
          name: 'Classic Chicken Burger',
          description: 'A juicy grilled chicken patty topped with lettuce, tomato, and mayo.',
          price: 300 ,
          image: "https://img.freepik.com/premium-photo/classic-chicken-burger_1272857-200324.jpg"
    },
        {
          id:2,
          name: 'Falafel Burger',
          description: 'A crispy falafel patty with tahini sauce, lettuce, and tomatoes.',
          price: 250,
          image: "https://www.eatingwell.com/thmb/ACveNSq0MByuKl_aLA_T-gaVlUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5771127-b89da7c183cf406ca540364446837df8.jpg"
     },       
        
        {  
          id:3,
          name: 'Chocolate Fudge Brownie',
          description: 'Rich chocolate ice cream swirled with chunks of fudgy brownie, perfect for chocolate lovers.',
          price: 150,
          image: "https://www.shutterstock.com/image-photo/delicious-chocolate-brownie-on-polished-600nw-2502134497.jpg"
     },       
        {     
          id:3,
          name: 'Strawberry Swirl',
          description: 'Refreshing strawberry ice cream with a swirl of strawberry sauce, made from fresh strawberries.',
          price: 200 ,
          image: "https://wholefully.com/wp-content/uploads/2013/06/IMG_4924-735x1103.jpg"
    },      
        { 
          id:3,
          name: 'Mint Chocolate Chip',
          description: 'A cool mint ice cream loaded with chocolate chips, providing a refreshing and indulgent treat.',
          price: 250,
          image: "https://img.lovepik.com/photo/48013/3254.jpg_wh860.jpg"
    },
        {
          id:3,
          name: 'Mango Mania',
          description: 'Creamy mango ice cream made with ripe mangoes, capturing the essence of summer in every scoop.',
          price: 300,
          image: "https://images.pexels.com/photos/28525188/pexels-photo-28525188.jpeg?cs=srgb&dl=pexels-alejandro-aznar-155337093-28525188.jpg&fm=jpg"
   },        
         {
          id:3,
          name: 'Cookies and Cream'.
          description: 'A delightful blend of vanilla ice cream with crushed chocolate cookies, creating a crunchy texture.',
          price: 350,
          image: "https://richanddelish.com/wp-content/uploads/2022/05/cookies-and-cream-ice-cream-688x1024.jpg"
  },     
        {
          id:3,
          name: 'Pistachio Paradise',
          description: 'Smooth pistachio ice cream made with real pistachios, offering a nutty flavor and creamy consistency.',
          price: 400,
          image: "https://img.freepik.com/premium-photo/still-life-pistachio-ice-cream-bowl_659326-464.jpg"
  },   

  {
          id:3,
          name: 'Caramel Cookie Crunch',
          description: 'Creamy caramel ice cream with crunchy caramel bits, delivering a sweet and satisfying experience.',
          price: 450,
          image: "https://5.imimg.com/data5/RJ/SA/JM/SELLER-4199470/caramel-cookie-crunch-ice-cream.jpg"
  },   
        {
          id:3,
          name: 'Tiramisu Twist',
          description: 'Coffee-flavored ice cream layered with mascarpone and cocoa, inspired by the classic Italian dessert.',
          price: 500,
          image: "https://img.freepik.com/premium-photo/tiramisu-with-twist-italian-dessert_198067-165400.jpg"
  },   
     {
          id:3,
          name: 'Rocky Road',
          description: 'A chocolate ice cream packed with marshmallows and nuts, providing a delightful mix of textures and flavors.',
          price: 600,
          image: "https://i0.wp.com/marbleandwhisk.com/wp-content/uploads/2020/12/Rocky-Road-3.jpg?fit=1200%2C1800&ssl=1"
  },   
      {
         id:3,
          name: 'Sorbet',
          description: 'fruit and water, typically dairy-free.',
          price: ,
          image: "https://t3.ftcdn.net/jpg/09/41/96/34/360_F_941963406_L4mePUAbJlTTxKgaoIjpnBHsrwfP1Czb.jpg"
  },   
     
        {
          id:4,
          name: 'Sweet and Sour Pork',
          description: 'This dish features tender pieces of pork coated in a bright orange-red sweet and sour sauce, often served with bell peppers and pineapple.',
          price: 800,
          image: "https://i0.wp.com/iankewks.com/wp-content/uploads/2023/10/IMG_0299.jpg?resize=800%2C1056&ssl=1"
  },   
      {
          id:4,
          name: 'Ma Po Tofu',
          description: 'A classic Sichuan dish made with soft tofu and minced meat (usually pork or beef) in a spicy sauce made from fermented black beans and chili paste.',
          price: 650,
          image: "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg"
  },   
     {
          id:4,
          name: 'Fried Rice',
          description: 'A versatile dish made from stir-fried rice with various ingredients such as eggs, vegetables, and meat or seafood, often enjoyed as a side or main dish.',
          price: 450,
          image: "https://www.allrecipes.com/thmb/2sI15_bQPb_LYm-SmQbzidHG_WA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_21561_ShrimpFriedRice_4x3_13119-b29fd221132645f39db69b12a2525998.jpg"
  },   
       {
          id:4,
          name: 'Dim Sum',
          description: 'A collection of small dishes, including dumplings, buns, and pastries, often enjoyed with tea, perfect for sharing among friends and family.',
          price: 650,
          image: "https://thumbs.dreamstime.com/b/dim-sum-2578659.jpg"
  },   
       {
          id:4,
          name: 'Dumplings',
          description: 'These consist of minced meat and vegetables wrapped in thin dough, which can be boiled, steamed, or fried, making them a popular snack or appetizer.',
          price: 450,
          image: "https://media.istockphoto.com/id/1358463108/photo/asian-dumplings-with-soy-sauce.jpg?s=612x612&w=0&k=20&c=zubrIDmdrc3J76vJaBapB1miW-aUeZ05YpOON4u4N0g="
  },   
       {
          id:4,
          name: 'Twice-Cooked Pork',
          description: 'A Sichuan specialty where pork is first boiled, then stir-fried with a variety of spices and vegetables, resulting in a flavorful and tender dish.',
          price: 555,
          image: "https://www.beyondkimchee.com/wp-content/uploads/2022/11/Twice-Cooked-Pork-10.jpg"
  },   
       {
          id:4,
          name: 'Kung Pao Chicken',
          description: 'A spicy stir-fry featuring chicken, peanuts, and vegetables, seasoned with soy sauce and chili peppers.',
          price: 480,
          image: "https://www.seriouseats.com/thmb/BDJ9J1TKURp-WzODtAmxbrdg_Zg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2010__06__2021-02-12-Real-Deal-Kung-Pao-Chicken-MHOM-21-d8de1c4b127a4dc7b6d9e43e4b18a9e8.jpg"
  },   
       {
          id:4,
          name: 'Spicy Seafood Noodle Soup',
          description: 'A spicy noodle soup that features a rich broth made with seafood, vegetables, and chili oil. The dish is known for its bold flavors and is often served with a variety of seafood, including shrimp, squid, and clams.',
          price: 550,
          image: "https://www.koreanbapsang.com/wp-content/uploads/2011/04/DSC_0066-e1539057703301.jpg"
  },   
       {
          id:4,
          name: 'Black Bean Noodles',
          description: 'consisting of wheat noodles topped with a savory black bean sauce made from fermented black soybeans, diced pork, and vegetables. It’s often garnished with cucumber slices for a refreshing crunch.',
          price: 560,
          image: "https://www.curiousnut.com/wp-content/uploads/2015/06/Korean-Black-Bean-Noodles-New1-T.jpg"
  },   
       {
          id:4,
          name: 'Tom Jab Chai',
          description: 'This is a Chinese-inspired vegetable soup made by slow boiling leafy greens like cabbage and mustard greens with pork or chicken for a rich, meaty flavor. It is not spicy but is packed with umami from the long cooking process, making it a comforting dish.',
          price: 300,
          image: "https://as1.ftcdn.net/v2/jpg/02/48/99/12/1000_F_248991261_6Cr80mKmbKDNFA0eqQ0ouC9JaSCraKgX.jpg"
  },   
      
        {
          id:5,
          name: 'Hyderabadi Chicken Dum Biryani',
          description: 'Marinated chicken layered with fragrant basmati rice, slow-cooked to perfection. ',
          price: 250,
          image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
  },   
       {
          id:5,
          name: 'Mutton Biryani',
          description: 'Tender mutton pieces cooked with aromatic spices and basmati rice, offering a rich and savory experience.',
          price: 450,
          image: "https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg"
  },   
       {
          id:5,
          name: 'Prawn Biryani',
          description: 'A coastal delight featuring succulent prawns cooked with fragrant rice and spices, offering a taste of the sea.',
          price: 499,
          image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg"
  },   
       {
          id:5,
          name: 'Hyderabadi Chicken Dum Biryani',
          description: 'Marinated chicken layered with fragrant basmati rice, slow-cooked to perfection.',
          price: 250,
          image: "https://hinzcooking.com/wp-content/uploads/2019/08/Hyderabadi-Chicken-Dum-Biryani-Recipe-2-1.jpg"
  },   
       {
          id:5,
          name: 'Persian Lamb Biryani',
          description: 'A rich and aromatic dish made with saffron-infused rice, tender meat, and a blend of spices, often served with yogurt.',
          price: 450,
          image: "https://img.freepik.com/premium-photo/persian-lamb-biryani-with-barberries_1170794-58067.jpg"
  },   
       {
          id:5,
          name: 'Mutton Kacchi Biryani',
          description: ' Raw marinated mutton layered with partially cooked rice, slow-cooked to allow the flavors to meld beautifully.',
          price: 480,
          image: "https://static.wixstatic.com/media/7af7af_a0847a23f0584fbd8be11c99bb08d3ad~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7af7af_a0847a23f0584fbd8be11c99bb08d3ad~mv2.jpg"
  },   
       {
          id:5,
          name: 'Chicken Biryani',
          description: 'Juicy chicken pieces cooked with basmati rice and a mix of spices, creating a comforting and hearty meal.',
          price: 220,
          image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
  },   
       {
          id:5,
          name: 'Ayda Persian Kitchen Biryani',
          description: 'a blend of aromatic spices and is often served with a side of tangy raita.',
          price: 280,
          image: "https://b.zmtcdn.com/data/dish_photos/415/7c4411c1df981e268f4b46792aa64415.jpg"
  },   
       {
          id:5,
          name: 'Paneer Biryani ',
          description: 'A rich and creamy biryani made with paneer (Indian cottage cheese) cubes, basmati rice, and a mix of spices,by a side of yogurt or raita. ',
          price: 250,
          image: "https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-9.jpg"
  },   
       {
          id:5,
          name: 'Kuwaiti Biryani',
          description: 'A fragrant rice dish with marinated chicken or lamb, often garnished with nuts and raisins for a touch of sweetness.',
          price: 400,
          image: "https://www.finmail.com/wp-content/uploads/2021/06/Hyderabadi-chicken-Biryani-1.jpg"
  },   
     
        {
          id:6,
          name: 'Appy Fizz',
          description: 'A sparkling apple drink that combines the taste of apples with a fizzy twist.',
          price: 40,
          image: "https://m.media-amazon.com/images/I/71DJ7ngZGKL._AC_UF1000,1000_QL80_.jpg"
  },   
        {
          id:6,
          name: 'Mountain Dew ',
          description: 'A citrus-flavored soft drink that is energizing and refreshing, perfect for outdoor activities.',
          price: 40,
          image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-10-17/Mountain_Dew__Soft_Drink_-_Mountain_Dew_Bottle__600_Ml_.jpg"
  },   
       {
          id:6,
          name: 'Coca-Cola',
          description: 'A classic carbonated soft drink with a refreshing cola flavor.',
          price: 50,
          image: "https://images.pexels.com/photos/12960150/pexels-photo-12960150.jpeg?cs=srgb&dl=pexels-valeriia-harbuz-2161259-12960150.jpg&fm=jpg"
  },   
       {
          id:6,
          name: 'Sprite',
          description: 'A lemon-lime flavored soft drink that is crisp and refreshing, ideal for hot days.',
          price: 55,
          image: "https://thumbs.dreamstime.com/b/aluminium-can-sprite-isolated-over-white-background-119173810.jpg"
  },   
       {
          id:6,
          name: 'Red Bull Energy Drink',
          description: 'A popular energy drink known for its unique blend of caffeine, taurine, and B vitamins. It provides a quick energy boost and enhances alertness and concentration. The taste is slightly sweet with a hint of citrus.',
          price: 100,
          image: "https://vinepair.com/wp-content/uploads/2015/09/red-bull-card-375x450.jpg"
  },   
       {
          id:6,
          name: 'Monster Energy Drink',
          description: 'A carbonated energy drink that contains caffeine, ginseng, and B vitamins, designed to boost energy and enhance performance.',
          price: 110,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1366px-Monster_Energy_drink_%28cropped%29.jpg"
  },   
       {
          id:6,
          name: 'Sting Energy Drink',
          description: 'A popular energy drink known for its refreshing taste and energizing properties. It contains caffeine, taurine, and B vitamins, providing a quick boost of energy and alertness.',
          price: 60,
          image: "https://image3.mouthshut.com/images/ImagesR/2018/3/Sting-Energy-Drink-925923531-639101056-2.jpg"
  },   
       {
          id:6,
          name: 'Limca',
          description: 'A lemon-flavored soft drink that is refreshing and popular in India.',
          price: 45,
          image: "https://athidhimi.com/wp-content/uploads/2023/04/limca-600-ml-product-images-o490001794-p490001794-0-202203151908.jpg"
  },   
       {
          id:6,
          name: 'Fanta',
          description: ' A fruity orange-flavored soda that is popular for its sweet taste.',
          price: 40,
          image: "http://sushi-ushi.com.ua/assets/images/products/drugoe/51piippyn8l._sl1000_.jpg"
  },   
       {
          id:6,
          name: 'Paper Boat Ginger Lemon Sparkling Water',
          description: 'A fizzy drink with the zing of ginger and lemon, offering a refreshing and sugar-free option.',
          price: 65,
          image: "https://images-cdn.ubuy.co.in/638103635d77aa2d6836b282-paper-boat-ginger-lemon-sparkling-water.jpg"
  },   
      
        {
          id:7,
          name: 'Veg Steam Momos',
          description: 'Soft, steamed dumplings filled with a mix of fresh vegetables and spices, served with a tangy dipping sauce.',
          price: 150,
          image: "https://www.meroshopping.com/images/Veg_MoMo_Steam.jpg"
  },   
       {
          id:7,
          name: 'Chicken Momos',
          description: 'Juicy dumplings stuffed with minced chicken and aromatic herbs, perfect for a savory snack.',
          price: 80,
          image: "https://img.freepik.com/premium-photo/chicken-steam-momo-nepalese-traditional-dish-momo-stuffed-with-chicken-then-cooked-served-with-sauce-rustic-wooden-background-selective-focus_726363-739.jpg?w=2000"
  },   
       {
          id:7,
          name: 'Chicken Tandoori Momos',
          description: 'Tandoori-flavored chicken momos, grilled to perfection, offering a smoky taste and served with mint chutney.',
          price: 250,
          image: "https://spiceofnepal.ca/wp-content/uploads/2020/08/tandoori-chicken-momo.jpg"
  },   
       {
          id:7,
          name: 'Mutton Momos',
          description: 'Rich and flavorful mutton-filled dumplings, perfect for meat lovers, served with a side of spicy sauce.',
          price: 299,
          image: "https://5.imimg.com/data5/SELLER/Default/2021/9/HO/JQ/GA/19736347/mutton-momos-1000x1000.jpg"
  },   
       {
          id:7,
          name: 'Kurkure Chicken Momos',
          description: 'Premium chicken momos with a rich filling, offering a delightful taste experience, served with a special sauce.',
          price: 210,
          image: "https://i.ytimg.com/vi/EA5pNVxXdZM/maxresdefault.jpg"
  },   
       {
          id:7,
          name: 'Cheese Momos',
          description: 'Cheesy dumplings that melt in your mouth, combining the goodness of cheese with a soft outer layer.',
          price: 180,
          image: "https://www.theskburger.com/wp-content/uploads/2022/08/baked-cheesy-momos-veg-single.617c39d51807f9d00741440687693691.1.jpg"
  },   
       {
          id:7,
          name: 'Chicken Crispy Momo',
          description:'marinated chicken fried with offering a fusion of flavors.',
          price: 170,
          image: "https://hungerend.com/wp-content/uploads/2022/03/CRISPY-CHICKEN-MOMO-min.jpg"
  },   
       {
          id:7,
          name: 'Corn Chese Fried Momos',
          description: 'A mix of spicy vegetables wrapped in dough, served with a hot chili sauce for an extra kick.',
          price: 130,
          image: "https://5.imimg.com/data5/SELLER/Default/2022/8/XK/TE/DT/107480319/cheese-corn-momos-500x500.jpg"
  },   
       {
          id:7,
          name: 'Cheese and Spinach Chicken Momos',
          description: 'Known for their intense spiciness, these momos are made with Tibetan herbs and spices, grated parmesan cheese.',
          price: 299,
          image: "https://i.ytimg.com/vi/gK2HCB_Lf7c/maxresdefault.jpg"
  },   
       {
          id:7,
          name: 'Chicken pizza momo',
          description: ',known fors piciness with the perfect blend of melting cheese calls for a treat.',
          price: 255,
          image: "https://assets.telegraphindia.com/telegraph/2022/Feb/1643899301_eat.jpg"
  },   
     
        {
          id:8,
          name: 'Brownies',
          description: 'Fudgy or cakey chocolate squares that are rich and decadent, often served warm with a scoop of ice cream.',
          price: 150,
          image: "https://wallpapers.com/images/hd/brownies-with-chocolate-dip-it47ux6mie0stqiw.jpg"
  },   
        {
          id:8,
          name: 'Tiramisu ',
          description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.',
          price: 299,
          image: "https://www.rouses.com/wp-content/uploads/2018/03/Tiramisu-585178794.jpg"
  },   {
          id:8,
          name: 'Lemon Tart',
          description: 'A buttery tart filled with a tangy lemon custard, often topped with a light dusting of powdered sugar.',
          price: 455,
          image: "https://bakingamoment.com/wp-content/uploads/2023/03/IMG_1706-lemon-tart.jpg"
  },   {
          id:8,
          name: 'Chocolate Mousse',
          description: 'A light and airy dessert made with whipped cream and chocolate, creating a rich yet fluffy texture.',
          price: 600,
          image: "http://mamasgottabake.files.wordpress.com/2012/04/dsc_00191.jpg"
  },   {
          id:8,
          name: 'Sticky Rice with Mango ',
          description: 'A traditional Thai dessert featuring sweet sticky rice served with ripe mango slices and drizzled with coconut milk.',
          price: 800,
          image: "https://www.marionskitchen.com/wp-content/uploads/2019/08/Thai-Mango-Sticky-Rice2.jpg"
  },   {
          id:8,
          name: 'Saffron Ice Cream',
          description: 'A luxurious ice cream flavored with saffron and cardamom, often garnished with pistachios for added texture.',
          price: 699,
          image: "https://www.easycookingwithmolly.com/wp-content/uploads/2016/10/no-churn-saffron-ice-cream1.jpg"
  },   {
          id:8,
          name: 'Pavlova',
          description: 'A meringue-based dessert with a crisp crust and soft, light inside, topped with whipped cream and fresh fruits.',
          price: 645,
          image: "https://www.eatingbirdfood.com/wp-content/uploads/2022/09/pavlova-process-horizontal-6.jpg"
  },   {
          id:8,
          name: 'Baklava',
          description: 'A sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with honey or syrup.',
          price: 745,
          image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/14/190495.jpg"
  },   {
          id:8,
          name: 'Kulfi ',
          description: 'A rich and creamy frozen dessert made from reduced milk, often flavored with cardamom, saffron, or pistachio, and served on a stick.',
          price: 185,
          image: "https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/04/kulfi-17.jpg"
  },  
        {
          id:8,
          name: 'Ras Malai',
          description: 'Soft cheese discs soaked in sweetened, thickened milk, flavored with cardamom and garnished with pistachios.',
          price: 85,
          image: "https://i.pinimg.com/originals/f5/f8/42/f5f842cb91597146df97a40f962fa699.jpg"
  }, 
     
        {
          id:9,
          name: 'Chicken Seekh Kabab',
          description: 'Spiced minced chicken skewered and grilled, offering a smoky flavor and juicy texture.',
          price: 250,
          image: "https://spicecravings.com/wp-content/uploads/2021/03/Chicken-Seekh-Kebab-Featured-1-1024x1024.jpg"
  }, 
      {
          id:9,
          name: 'Mutton Shami Kabab',
          description: 'A blend of minced mutton and lentils, seasoned with spices, shaped into patties, and shallow-fried for a rich taste.',
          price: 399,
          image: "https://5.imimg.com/data5/SELLER/Default/2020/11/PF/FJ/WR/9816976/img-20201120-wa0012-v1-1000x1000.jpg"
  }, 
      {
          id:9,
          name: 'Hara Bhara Kabab',
          description: 'A vegetarian kabab made from spinach, green peas, and spices, shaped into patties and shallow-fried, offering a healthy option.',
          price: 250,
          image: "https://www.foodie-trail.com/wp-content/uploads/2022/03/IMG_8538-scaled.jpg"
  }, {
          id:9,
          name: 'Keema Kabab',
          description: 'Minced meat mixed with spices, shaped into patties, and grilled, providing a flavorful and juicy experience.',
          price: 450,
          image: "https://i.ytimg.com/vi/UQLUrAoyJOQ/maxresdefault.jpg"
  }, {
          id:9,
          name: 'Hariyali Fish Tikka Kabab',
          description: 'Marinated fish pieces grilled to perfection, seasoned with spices, and served with a tangy sauce.',
          price: 350,
          image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Fish-Tikka.jpg"
  }, {
          id:9,
          name: 'Malai Tikka Kabab',
          description: 'Creamy marinated chicken pieces grilled to perfection, known for their tender texture and rich flavor.',
          price: 350,
          image: "http://www.recipesaresimple.com/wp-content/uploads/2014/08/mal-tik.jpg"
  }, {
          id:9,
          name: 'Vegetable Seekh Kabab',
          description: 'A mix of vegetables and spices, shaped onto skewers and grilled, providing a healthy and flavorful vegetarian option.',
          price: 250,
          image: "https://www.masala.tv/wp-content/uploads/2016/11/1.jpg"
  }, {
          id:9,
          name: 'Prawn Kebab',
          description: 'Marinated prawns grilled with spices, offering a delicious seafood option with a smoky flavor.',
          price: 450,
          image: "https://www.shoremariner.co.nz/wp-content/uploads/2022/02/shutterstock_1481354291-scaled.jpg"
  }, {
          id:9,
          name: 'mutton Seekh kabab',
          description: 'deep-fried until golden brown, offering a crunchy texture and savory filling.',
          price: 350,
          image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Seekh-Kebab.jpg"
  }, {
          id:9,
          name: 'Doner Kabab',
          description: 'Amix vegis and spices,grilled chicken and extra cheese burst, with a smoky flavours.',
          price: 200,
          image: "https://kim-foods.com/wp-content/uploads/2018/07/Kebab-scaled.jpg"
  }, 

{
          id:10,
          name: 'Sambuca Prawns',
          description: 'Juicy prawns marinated in sambuca, served with a tangy dip.',
          price: 395,
          image: "http://d2k9njawademcf.cloudfront.net/indeximages/6644/original/P6054182.jpg?1380059563"
  }, 

{
          id:10,
          name: 'Nachos Chicken',
          description: 'Crispy nachos topped with seasoned chicken and melted cheese, served with salsa.',
          price: 210,
          image: "https://www.savoryandsweetfood.com/wp-content/uploads/2014/05/20140512-161249.jpg"
  }, 

{
          id:10,
          name: 'Grilled Sole with Lemon Butter Sauce',
          description: 'Delicately grilled sole fish drizzled with a rich lemon butter sauce, served with seasonal vegetables.',
          price: 380,
          image: "https://www.platingsandpairings.com/wp-content/uploads/2023/07/grilled-salmon-lemon-caper-sauce-4-1365x2048.jpg"
  }, 

{
          id:10,
          name: 'Chicken Stroganoff with Herb Chilli Rice',
          description: 'Tender chicken pieces cooked in a creamy mushroom sauce, served with fragrant herb chili rice.',
          price: 380,
          image: ""
  }, 

{
          id:10,
          name: 'Barbecue Chicken Breast ',
          description: 'Grilled chicken breast glazed with a smoky barbecue sauce, served with a side of coleslaw.',
          price: 280,
          image: ""
  }, 

{
          id:10,
          name: 'Chicken Lasagna',
          description: 'Layers of pasta filled with seasoned chicken, béchamel sauce, and cheese, baked to perfection.',
          price: 380,
          image: ""
  }, 

{
          id:10,
          name: 'Cottage Cheese Aglio Olio',
          description: 'Sautéed cottage cheese tossed in garlic-infused olive oil, served with a sprinkle of herbs.',
          price: 225,
          image: ""
  }, 

{
          id:10,
          name: 'Fish N Chips ',
          description: 'Classic British dish featuring battered fish served with crispy fries and tartar sauce.',
          price: 150,
          image: ""
  }, 

{
          id:10,
          name: 'Chicken Madagascar',
          description: 'Chicken cooked in a spicy and aromatic sauce, served with rice or bread.',
          price: 280,
          image: ""
  }, 

{
          id:10,
          name: 'Greek Chicken',
          description: 'Marinated chicken grilled with Mediterranean spices, served with a side of Greek salad.',
          price: 280,
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
