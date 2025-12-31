import mongoose from "mongoose";

//creating schema for user
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

//creating a user collection using model and exporting
export default mongoose.model("User", userSchema);