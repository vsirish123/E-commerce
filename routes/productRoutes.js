import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ================= CREATE PRODUCT =================
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: "Product added successfully",
      product
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product",
      error: error.message
    });
  }
});

// ================= GET ALL PRODUCTS =================
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ================= GET SINGLE PRODUCT =================
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return res.status(404).json({ message: "Product not found" });

  res.json(product);
});

// ================= UPDATE PRODUCT =================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Product not found" });

    res.json({
      message: "Product updated successfully",
      updated
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message
    });
  }
});

// ================= DELETE PRODUCT =================
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message
    });
  }
});

export default router;
