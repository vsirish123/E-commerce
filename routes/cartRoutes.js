import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { auth } from "../server.js";

const router = express.Router();

// ADD to Cart (POST)
router.post("/", auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(400).json({ message: "Invalid Product" });

    const cartItem = await Cart.create({
      userId: req.user.id,
      productId,
      quantity
    });

    res.status(201).json({ message: "Added to Cart", cartItem });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
});

// READ Cart Items
router.get("/", auth, async (req, res) => {
  const cart = await Cart.find({ userId: req.user.id });
  res.json(cart);
});

// UPDATE quantity
router.put("/:id", auth, async (req, res) => {
  const updated = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Cart Updated", updated });
});

// DELETE from cart
router.delete("/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item Removed" });
});

export default router;
