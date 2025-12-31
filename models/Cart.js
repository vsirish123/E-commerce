import mongoose from "mongoose";

//creating schema for cart
const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  quantity: Number
});

//creating a cart collection using model and exporting
export default mongoose.model("Cart", cartSchema);
