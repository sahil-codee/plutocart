import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Products";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);

  const addProduct = (product) => {
    cart.find((p) => p.id === product.id)
      ? alert("Product is already there in the cart adjust its quantities!")
      : setCart([{ ...product, qty: 1 }, ...cart]);
  };

  return (
    <Router>
      <div className="App">
        <nav
          style={{ backgroundColor: "#333", color: "white", padding: "10px" }}
        >
          <h1 className="text-3xl">Product Store</h1>
          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Cart
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                selectedCategory={selectedCategory}
                products={products}
                addProduct={addProduct}
                category={handleCategory}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
