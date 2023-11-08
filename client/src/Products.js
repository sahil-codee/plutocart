import React from "react";
import Product from "./Product";
import Category from "./components/Category";

export default function Products({ products, addProduct, category }) {
  return (
    <>
      <h1 className="text-6xl" style={{ padding: "20px" }}>
        Product Categories
      </h1>
      <Category onSelectedCategory={category} />
      <h2>Prodcts List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product key={product.id} product={product} add={addProduct} />
        ))}
      </div>
    </>
  );
}
