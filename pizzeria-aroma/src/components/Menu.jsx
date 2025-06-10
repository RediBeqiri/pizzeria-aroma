import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Menu.css";

const categories = [
  {
    name: "Pizzas",
    image: "/images/pizza.jpg",
    products: [
      { id: 1, name: "Margherita", description: "Tomato, mozzarella, basil", price: "€8.50", image: "images/margarita.jpg"},
      { id: 2, name: "Pepperoni", description: "Tomato, mozzarella, pepperoni", price: "€9.50", image: "/images/Pepperoni.jpg" },
      { id: 3, name: "Hawaiian", description: "Tomato, mozzarella, ham, pineapple", price: "€9.00", image: "/images/hawaii.jpg"},
      { id: 4, name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, provolone", price: "€10.00", image: "/images/hawaii.jpg"},
      { id: 4, name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, provolone", price: "€10.00", image: "/images/hawaii.jpg"},
      { id: 4, name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, provolone", price: "€10.00", image: "/images/hawaii.jpg"},

    ],
  },
  {
    name: "Pastas",
    image: "/images/pasta.jpg",
    products: [
      { id: 5, name: "Carbonara", description: "Cream, pancetta, parmesan", price: "€10.00", image: "images/carbonara.jpg" },
      { id: 6, name: "Bolognese", description: "Meat sauce, parmesan", price: "€9.00", image: "images/bolognese.jpg" },
      { id: 7, name: "Pesto", description: "Basil pesto, parmesan", price: "€9.50", image: "images/pesto.jpg"},
      { id: 8, name: "Alfredo", description: "Cream sauce, chicken, parmesan", price: "€10.50", image: "images/alfredo.jpg" },
      { id: 8, name: "Alfredo", description: "Cream sauce, chicken, parmesan", price: "€10.50", image: "images/alfredo.jpg" },
      { id: 8, name: "Alfredo", description: "Cream sauce, chicken, parmesan", price: "€10.50", image: "images/alfredo.jpg" },
    ],
  },
];

const Menu = ({ addToCart }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleShowMore = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      {categories.map((category) => {
        const isExpanded = expandedCategories[category.name];
        const displayedProducts = isExpanded ? category.products : category.products.slice(0, 3);

        return (
          <div key={category.name} className="menu-category-box">
            <h2 className="category-title">{category.name}</h2>
            <div className="product-cards">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={`${category.name}-${product.id}`}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image || category.image}
                  showOrderButton={true}
                  addToCart={addToCart}
                />
              ))}
            </div>
            {category.products.length > 3 && (
              <div className="show-more-container">
                <button
                  className="show-more-btn"
                  onClick={() => toggleShowMore(category.name)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
