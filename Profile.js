const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  center: { type: String, required: true },
  photo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);