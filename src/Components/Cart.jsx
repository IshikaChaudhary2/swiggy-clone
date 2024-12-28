// src/components/Cart.js
import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Pizzas', quantity: 10, price: 200-800 },
    { id: 2, name: 'Burgers', quantity: 10, price: 250-450 },
    { id: 3, name: 'Ice Cream', quantity: 10, price: 50-649 },
    { id: 4, name: 'Chinese', quantity: 10, price: 450-800 },
    { id: 5, name: 'Biryani', quantity: 10, price: 170-499 },
    { id: 6, name: 'Cold Drinks', quantity: 10, price: 40-100 },
    { id: 7, name: 'Momos', quantity: 10, price: 50-299 },
    { id: 8, name: 'Desserts', quantity: 10, price: 80-899 },
    { id: 9, name: 'Kebabs', quantity: 10, price: 149-400 },
    { id: 10, name: 'Continental Food', quantity: 10, price: 79-650 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
