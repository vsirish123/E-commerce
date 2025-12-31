import mongoose from "mongoose";

//creating schema for product
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number
});

//creating a product collection using model and exporting
export default mongoose.model("Product", productSchema);
