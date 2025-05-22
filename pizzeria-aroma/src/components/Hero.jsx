import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/Images/HeroBg2.jpg"
        alt="Delicious Pizza"
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">Pizzeria Aroma</h1>
        <p className="hero-subtitle">The perfect family restaurant</p>
        <Link to="/menu" className="hero-button">Order Now</Link>
      </div>
    </section>
  );
};

export default Hero;
