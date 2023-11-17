import React from "react";
import { Link } from "react-router-dom";
import "./navbar/nav.css";
import Category from "./Category";

export default function Navbar({ category }) {
  return (
    <div>
      {" "}
      <nav>
        <Link to="/">
          {" "}
          <h1 className="logo">PlutoCart</h1>
        </Link>
        <Category onSelectedCategory={category} />
        <input type="text" placeholder=" Search for products!" />
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
}
