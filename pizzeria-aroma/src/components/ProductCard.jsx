import React from "react";
import "./ProductCard.css"; // if you have it

const ProductCard = ({ name, description, price, image, showOrderButton }) => {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3>{name}</h3>
      <p className="price">{price}</p>
      {showOrderButton && (
        <button className="order-btn" onClick={() => alert(`Ordering ${name}`)}>
          Order Now
        </button>
      )}
    </div>
  );
};

export default ProductCard;
