import React from "react";

export default function Cart({cart}) {
  return (
    <>
      <div>
        <h1>Welcome to the cart</h1>
      </div>
      <ul>{cart.map((product) => <li>{product.title} - {product.price} {product.image}</li>  )}</ul>
    </>
  );
}
