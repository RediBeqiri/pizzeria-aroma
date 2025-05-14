import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/Images/PizzaHero.jpeg"  // Directly referencing the image in the public folder
        alt="Delicious Pizza"
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">Delicious Pizza Awaits</h1>
        <p className="hero-subtitle">Fresh, hot, and made with love</p>
        <Link to="/menu" className="hero-button">Order Now</Link>
      </div>
    </section>
  );
};

export default Hero;
