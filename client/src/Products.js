import React from "react";
import Product from "./Product";
import Category from "./components/Category";

export default function Products({ products, addProduct, category }) {
  return (
    <>
      {/* <h1 className="text-6xl" style={{ padding: "20px" }}>
        Product Categories
      </h1> */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%", padding: "20px" }}>
          <Category onSelectedCategory={category} />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product key={product.id} product={product} add={addProduct} />
          ))}
        </div>
      </div>
    </>
  );
}
