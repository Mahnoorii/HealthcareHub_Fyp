const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const { exec } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());

// ⚡ Handle large data
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ----------------------------
// MongoDB Connection
// ----------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ----------------------------
// ROUTES
// ----------------------------
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const testRoutes = require("./routes/testsRoutes");
const requestRoutes = require("./routes/requestsRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/requests", requestRoutes);

// ----------------------------
// AI PDF Analysis API
// ----------------------------

// 📁 Multer setup (uploads folder)
const upload = multer({ dest: "uploads/" });

app.post("/api/analyze-report", upload.single("file"), (req, res) => {
  console.log("📥 Request received");

  if (!req.file) {
    console.log("❌ No file uploaded");
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = path.resolve(req.file.path);

  console.log("📂 File Path:", filePath);

  // ⚠️ Use 'py' instead of 'python' (important for Windows)
  exec(`py ../ai-module/main.py "${filePath}"`, (err, stdout, stderr) => {
    
    console.log("✅ STDOUT:", stdout);
    console.log("❌ STDERR:", stderr);

    if (err) {
      console.error("🔥 Python Execution Error:", err);
      return res.status(500).json({ error: "AI processing failed" });
    }

    if (!stdout) {
      console.error("⚠️ No output from Python");
      return res.status(500).json({ error: "No response from AI" });
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (e) {
      console.error("❌ JSON Parse Error:", stdout);
      res.status(500).json({ error: "Invalid AI response" });
    }
  });
});

// ----------------------------
// HEALTH CHECK
// ----------------------------
app.get("/", (req, res) => {
  res.json({ message: "HealthCareHub Backend Running" });
});

// ----------------------------
// START SERVER
// ----------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});