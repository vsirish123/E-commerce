import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save user (password stored as normal text)
    const newUser = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    // Match password (direct compare)
    if (user.password !== password)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      "secretKey",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login Successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
});

export default router;
