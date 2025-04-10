import React from "react";
import "./Menu.css";

// Mock data for products
const categories = [
  {
    name: "Pizza",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Margherita", description: "Classic cheese and tomato pizza.", price: "$12.99" },
      { name: "Pepperoni", description: "Pepperoni with mozzarella and marinara.", price: "$14.99" },
    ],
  },
  {
    name: "Pasta",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Spaghetti Carbonara", description: "Creamy carbonara with bacon.", price: "$11.99" },
      { name: "Fettuccine Alfredo", description: "Rich Alfredo sauce with fettuccine.", price: "$13.49" },
    ],
  },
  {
    name: "Drinks",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Coke", description: "Refreshing classic cola.", price: "$2.49" },
      { name: "Lemonade", description: "Fresh homemade lemonade.", price: "$2.99" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      {/* Header Section */}
      <header className="menu-header">
        <div className="header-text">
          <h1>Our Menu</h1>
          <p>Delicious meals made with the finest ingredients</p>
        </div>
      </header>

      {/* Categories Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.name}</h2>
            <div className="category-image" style={{ backgroundImage: `url(${category.image})` }} />
            <div className="products">
              {category.products.map((product, index) => (
                <div key={index} className="product-card">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Pizzeria Aroma. All rights reserved.</p>
          <p>Contact us: info@pizzeriaaroma.com | 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
