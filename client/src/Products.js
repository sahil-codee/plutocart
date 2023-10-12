import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(json.map((product) => product.category)),
        ];
        setUniqueCategories(uniqueCategories);
      });
  }, []);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Product Categories</h1>
      <div>
        {/* Category buttons */}
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={category === selectedCategory ? "active" : ""}
          >
            {category}
          </button>
        ))}
        <button onClick={() => handleCategorySelect("")}>All</button>
      </div>
      <Product products={filteredProducts} />
    </div>
  );
}
