import React from "react";
import "./CartPanel.css";

const CartPanel = ({ cart, updateCart, isCartVisible, closeCart, removeFromCart }) => {
    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;
        updateCart(id, newQuantity, undefined);
      };

  const handleCommentChange = (id, newComment) => {
    updateCart(id, null, newComment);
  };

  return (
    <div className={`cart-panel ${isCartVisible ? "show" : ""}`}>
      <button className="close-btn" onClick={closeCart}>
        X
      </button>
      <h3>Your Cart</h3>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <p className="item-name">{item.name}</p>
            <p className="item-price">{item.price}</p>
            <div className="quantity-section">
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}disabled={item.quantity <= 1}>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <textarea
              className="comment-box"
              placeholder="Add a comment"
              value={item.comment || ""}
              onChange={(e) => handleCommentChange(item.id, e.target.value)}
            />
            <p className="item-total">
              Total: €{(item.quantity * parseFloat(item.price.replace("€", ""))).toFixed(2)}
            </p>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartPanel;
