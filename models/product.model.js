const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  status: String,
  delete: Boolean,
});
const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
