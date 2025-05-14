import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ cart, toggleCart }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrunk" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">Pizzeria Aroma</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li className="cart-icon">
          <button onClick={toggleCart}>
            <FaShoppingCart size={26} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
