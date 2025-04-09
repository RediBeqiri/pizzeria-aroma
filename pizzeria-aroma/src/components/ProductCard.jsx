import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <div 
        className="product-image" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
