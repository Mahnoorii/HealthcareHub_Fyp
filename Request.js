const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  testName: { type: String, required: true },
  status: { type: String, default: "Pending" },
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", requestSchema);
