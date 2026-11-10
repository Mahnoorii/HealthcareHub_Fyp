const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// Add Request
router.post("/add", async (req, res) => {
  try {
    const { patientName, testName } = req.body;
    const request = new Request({ patientName, testName });
    await request.save();
    res.status(201).json({ message: "Request added successfully", request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Requests
router.get("/", async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Request status
router.put("/update/:id", async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Request updated", request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Request
router.delete("/delete/:id", async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.params.id);
    res.json({ message: "Request deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
