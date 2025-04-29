import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import BestSellers from "./components/BestSellers";
import Navbar from "./components/Navbar"; // <- already imported
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Modern Navbar */}
        <Navbar />

        {/* Set up the routes */}
        <Routes>
          {/* Home Page Route: Hero + Best Sellers */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <BestSellers />
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
