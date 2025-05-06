import React from 'react';
import pizzeriaImage from '../assets/images/pizzeriaAroma.jpeg'; // Import the image
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
            <div className="hero-content">
                <h2>Welcome to Pizzeria Aroma</h2>
                <h1>Your Favorite Pizzeria</h1>
                <p>Delicious pizzas made with love and passion.</p>
                {/* Your buttons */}
            </div>

            <div className="hero-right-shape">
                {/* Use an image tag directly */}
                <img
                src={pizzeriaImage}
                alt="Pizzeria Aroma"
                className="hero-image-placeholder"
                />
            </div>
        </div>
  );
};

export default Hero;
