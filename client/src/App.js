import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategory]);

  const addProduct = (product) => {
    cart.find((p) => p.id === product.id)
      ? alert("Product is already there in the cart adjust its quantities!")
      : setCart([{ ...product, qty: 1 }, ...cart]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar category={handleCategory} />
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
