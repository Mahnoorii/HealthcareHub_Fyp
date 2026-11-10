const express = require("express");
const router = express.Router();
const Test = require("../models/Test");

// ADD TEST
router.post("/add", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const newTest = new Test({ name, description, price });
    await newTest.save();

    res.status(201).json({
      message: "Test added successfully",
      test: newTest
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET ALL TESTS
router.get("/", async (req, res) => {
  try {
    const tests = await Test.find().sort({ createdAt: -1 });
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tests" });
  }
});

//  UPDATE TEST
router.put("/update/:id", async (req, res) => {
  try {
    const { name } = req.body;

    const updatedTest = await Test.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updatedTest) {
      return res.status(404).json({ error: "Test not found" });
    }

    res.status(200).json({
      message: "Test updated successfully",
      test: updatedTest
    });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});

// ✅ DELETE TEST
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);

    if (!deletedTest) {
      return res.status(404).json({ error: "Test not found" });
    }

    res.status(200).json({ message: "Test deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
