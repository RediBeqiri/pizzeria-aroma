import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="logo">Pizzeria <span className="brand">Aroma</span></h1>
        <p className="hero-description">
          Decism hackathon. Semisofi emkemi. Asan kuddbok. Bloppa Periscope.
          Antropotet Pinterest. Uning inaskad. Paltkoma nettokrati. Ryggprotest
          poligyn. Delningsekonomi gubyns.
        </p>
        <div className="hero-buttons">
          <button className="menu-btn">Our menu</button>
          <button className="drinks-btn">Our drinks</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-shape">
          <div className="hero-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


