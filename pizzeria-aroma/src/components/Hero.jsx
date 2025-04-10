import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>Pizzeria</h3>
        <h1>Aroma</h1>
        <p>
          Welcome to the best pizzeria in town! Try our delicious pizzas, made with love and fresh ingredients.
        </p>
        <div className="hero-buttons">
          <button className="menu-btn">Our Menu</button>
          <button className="drinks-btn">Our Drinks</button>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-placeholder"></div>
      </div>
    
    </div>
  );
};

export default Hero;
