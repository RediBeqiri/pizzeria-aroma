import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const footer = () => {
  return (
    <section className="footer">
      <h2>pizzeria Aroma</h2>
      <p>📍Lützer Straße 14, 34439 Willebadessen</p>
      <h3>📞05644/3059965</h3>
    </section>
  )
}

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/Images/HeroBg2.jpg"
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
