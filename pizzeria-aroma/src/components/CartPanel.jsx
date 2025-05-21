import React from "react";
import "./CartPanel.css";

const CartPanel = ({ cartItems = [], updateCart, removeFromCart, closeCart, isCartVisible }) => {
  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = (item.quantity || 1) + delta;
    if (newQuantity < 1) return;
    updateCart(id, newQuantity, item.comment);
  };

  const handleCommentChange = (id, comment) => {
    const item = cartItems.find((item) => item.id === id);
    updateCart(id, item.quantity, comment);
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const priceString = item?.price?.toString() || "0";
      const numericPrice = parseFloat(priceString.replace(/[^\d.]/g, ""));
      if (isNaN(numericPrice)) return sum;
      return sum + numericPrice * (item.quantity || 1);
    }, 0).toFixed(2);
  };

  return (
    <div className={`cart-panel ${isCartVisible ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={closeCart} className="close-btn">X</button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <textarea
                  placeholder="Add comment..."
                  value={item.comment || ""}
                  onChange={(e) => handleCommentChange(item.id, e.target.value)}
                />
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total:</strong> €{calculateTotal()}
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPanel;
