// src/components/Cart.js
import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Pizza', quantity: 2, price: 200 },
    { id: 2, name: 'Burger', quantity: 1, price: 150 },
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
