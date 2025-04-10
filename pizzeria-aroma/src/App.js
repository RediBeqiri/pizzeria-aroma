import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews"; // Assuming you have a Reviews component
import BestSellers from "./components/BestSellers";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header with Menu and other links */}
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <button className="home-btn">Home</button> {/* Link to the Home page */}
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <button className="menu-btn">Our Menu</button> {/* Link to Menu page */}
                </Link>
              </li>
              <li>
                <Link to="/reviews">
                  <button className="reviews-btn">Reviews</button> {/* Link to Reviews page */}
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Set up the routes */}
        <Routes>
          {/* Home Page Route: This will show the Hero and Best Sellers sections */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <BestSellers /> {/* Best Sellers section on the home page */}
              </div>
            }
          />

          {/* Menu Page Route */}
          <Route path="/menu" element={<Menu />} />

          {/* Reviews Page Route */}
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
