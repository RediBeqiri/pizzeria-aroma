import React, { useState } from "react";
import "./Menu.css";
import ProductCard from "./ProductCard"; // Assuming this exists

const categories = [
  {
    name: "Pizza",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Margherita", description: "Classic cheese and tomato pizza.", price: "$12.99" },
      { name: "Pepperoni", description: "Pepperoni with mozzarella and marinara.", price: "$14.99" },
      { name: "Veggie", description: "Vegetables with cheese.", price: "$13.49" },
      { name: "BBQ Chicken", description: "BBQ sauce, chicken, onions.", price: "$15.99" },
    ],
  },
  {
    name: "Pasta",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Spaghetti Carbonara", description: "Creamy carbonara with bacon.", price: "$11.99" },
      { name: "Fettuccine Alfredo", description: "Rich Alfredo sauce with fettuccine.", price: "$13.49" },
      { name: "Penne Arrabbiata", description: "Spicy tomato sauce with penne.", price: "$12.49" },
    ],
  },
  {
    name: "Drinks",
    image: "https://via.placeholder.com/600x300",
    products: [
      { name: "Coke", description: "Refreshing classic cola.", price: "$2.49" },
      { name: "Lemonade", description: "Fresh homemade lemonade.", price: "$2.99" },
      { name: "Iced Tea", description: "Chilled sweet tea.", price: "$2.89" },
    ],
  },
];

const Menu = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="header-text">
          <h1>Our Menu</h1>
          <p>Delicious meals made with the finest ingredients</p>
        </div>
      </header>

      <div className="categories">
        {categories.map((category, index) => {
          const isExpanded = expandedCategories.includes(category.name);
          const visibleProducts = isExpanded ? category.products : category.products.slice(0, 2);

          return (
            <div key={index} className="category">
              <h2 className="category-title">{category.name}</h2>
              <div
                className="category-banner"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="products">
                {visibleProducts.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={category.image}
                    showOrderButton={true}
                  />
                ))}
              </div>
              {category.products.length > 2 && (
                <button
                  className="show-more-btn"
                  onClick={() => toggleCategory(category.name)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          );
        })}
      </div>

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
