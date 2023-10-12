import React from "react";

export default function Product({ products, selectedCategory }) {
  const fetchProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <div>
      {fetchProducts &&
        fetchProducts.map((product) => (
          <div key={product.id}>
            {product.title}
            <br />
          </div>
        ))}
    </div>
  );
}
