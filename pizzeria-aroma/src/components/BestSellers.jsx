import React from 'react';
import ProductCard from './ProductCard';
import "./BestSellers.css"


const BestSellers = () => {
  return (
    <section className="best-sellers">
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-list">
        <ProductCard 
          name="Pizza Mozzarella" 
          price="8.99€" 
          image="/images/mozzarella.jpg" 
        />
        <ProductCard 
          name="Spicy Pepperoni" 
          price="9.49€" 
          image="/images/pepperoni.jpg" 
        />
        <ProductCard 
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
          <ProductCard 
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
          <ProductCard 
          name="Vegan Garden" 
          price="7.99€" 
          image="/images/vegan.jpg" 
        />
          
      </div>
    </section>
  );
};

export default BestSellers;

