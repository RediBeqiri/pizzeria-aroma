import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, name, description, price, image, showOrderButton, addToCart }) => {
  const handleOrder = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
      {showOrderButton && (
        <button className="order-btn" onClick={handleOrder}>
          Order Now
        </button>
      )}
    </div>
  );
};

export default ProductCard;
