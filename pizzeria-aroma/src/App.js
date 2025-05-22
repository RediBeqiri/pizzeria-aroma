// App.js
import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import BestSellers from "./components/BestSellers";
import Navbar from "./components/Navbar";
import CartPanel from "./components/CartPanel";
import Footer from "./components/Footer";
import Purchase from "./components/Purchase";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Now it works correctly

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, comment: "" }];
      }
    });

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

  const handleCheckout = () => {
    const previousPurchases = JSON.parse(localStorage.getItem("purchases")) || [];

    const newPurchase = {
      id: Date.now(),
      items: cart,
      timestamp: new Date().toLocaleString(),
    };

    const updatedPurchases = [...previousPurchases, newPurchase];

    localStorage.setItem("purchases", JSON.stringify(updatedPurchases));
    setCart([]);
    setIsCartOpen(false);

    navigate("/purchase");
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} handleCartClick={toggleCart} />

      {isCartOpen && (
        <CartPanel
          cartItems={cart}
          updateCart={updateCart}
          isCartVisible={isCartOpen}
          closeCart={toggleCart}
          removeFromCart={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

