import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaBook, FaStar, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ cartCount, handleCartClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Pizzeria Aroma</Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleDrawer}>
        {drawerOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop nav */}
      <ul className={`navbar-links ${drawerOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-icon-link" onClick={toggleDrawer}>
            <FaHome />
            <span className="nav-label">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-icon-link" onClick={toggleDrawer}>
            <FaBook />
            <span className="nav-label">Menu</span>
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="nav-icon-link" onClick={toggleDrawer}>
            <FaStar />
            <span className="nav-label">Reviews</span>
          </Link>
        </li>
        <li className="cart-icon">
          <button onClick={() => {
            toggleDrawer();
            handleCartClick();
          }} className="nav-icon-link">
            <FaShoppingCart />
            <span className="nav-label">Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
