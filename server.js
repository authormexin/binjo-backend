const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("BINJO BACKEND RUNNING 🚀");

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("BINJO BACKEND IS LIVE 🚀");
});

/* TEMP PRODUCT STORAGE */
let products = [
  {
    id: 1,
    name: "Demo Bag",
    price: 1500,
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  }
];

/* GET PRODUCTS */
app.get("/products", (req, res) => {
  res.json(products);
});

/* ADD PRODUCT */
app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({ message: "Product added", products });
});

/* ORDER ROUTE */
app.post("/order", (req, res) => {
  const order = req.body;
  console.log("NEW ORDER:", order);

  res.json({
    message: "Order received successfully"
  });
});

/* START SERVER */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
