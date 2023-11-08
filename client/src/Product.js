import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function Product({ product, add }) {


  return (
    <div>
      <Card
        sx={{
          width: "300px",
          height: "400px", // Set a fixed height for the cards
          maxWidth: "100%",
          boxShadow: "lg",
          padding: "20px", // Adjust padding as needed
          margin: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{ height: "200px", objectFit: "contain" }} // Set a fixed height for the images
          />
        </CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            style={{
              maxHeight: "2.6rem",
              overflow: "hidden",
              textDecoration: "none",
              lineHeight: "1", // Adjust the line-height to 1
              verticalAlign: "bottom", // Align text to the bottom
            }}
          >
            {product.title}
          </Typography>
          <Button
            variant="contained"
            onClick={() => add(product)}
            style={{ marginTop: "10px" }}
          >
            Add To Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
