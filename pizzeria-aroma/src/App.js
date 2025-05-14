import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import BestSellers from "./components/BestSellers";
import Navbar from "./components/Navbar";
import CartPanel from "./components/CartPanel";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const newItem = { ...item, quantity: 1, comment: "" };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };
  

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const updateCart = (id, quantity, comment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: quantity !== null ? quantity : item.quantity,
              comment: comment !== undefined ? comment : item.comment,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} toggleCart={toggleCart} />
        {isCartOpen && (
          <CartPanel
            cart={cart}
            updateCart={updateCart}
            isCartVisible={isCartOpen}
            closeCart={toggleCart}
            removeFromCart={removeFromCart}
          />
        )}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/best-sellers" element={<BestSellers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
