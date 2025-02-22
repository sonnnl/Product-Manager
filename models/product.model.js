const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  discountPercentage: Number,
  rating: Number,
  price: Number,
  stock: Number,
  brand: String,
  status: String,
  delete: Boolean,
  thumbnail: String,
  position: Number,
});
const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
