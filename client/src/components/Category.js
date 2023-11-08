import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  });

  return (
    <div>
      <Stack
        direction="row"
        spacing={8}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {categories &&
          categories.map((category) => (
            <Button
              style={{ borderRadius: "50px" }}
              variant="contained"
              key={category}
              onClick={() => onSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
      </Stack>
    </div>
  );
}
