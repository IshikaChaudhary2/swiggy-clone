// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Swiggy Clone</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, Items, cuisines..." />
      </div>
      <div className="profile">
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
