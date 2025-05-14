import React from 'react';
import ProductCard from './ProductCard';
import "./BestSellers.css"

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-list">
        <ProductCard 
          key="mozzarella-1"
          name="Pizza Mozzarella" 
          price="8.99€" 
          image="/images/mozzarella.jpg" 
        />
        <ProductCard 
          key="pepperoni-2"
          name="Spicy Pepperoni" 
          price="9.49€" 
          image="/images/pepperoni.jpg" 
        />
        <ProductCard 
          key="vegan-3"
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
        <ProductCard 
          key="vegan-4"
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
        <ProductCard 
          key="vegan-5"
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
      </div>
    </section>
  );
};

export default BestSellers;
