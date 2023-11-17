import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./navbar/nav.css";

export default function Category({ onSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ul>
          {categories &&
            categories.map((category) => (
              <li key={category} onClick={() => onSelectedCategory(category)}>
                {category.toUpperCase()}
              </li>
            ))}
        </ul>
      </Stack>
    </div>
  );
}
