const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// GET profile by userId
router.get("/:userId", async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE or UPDATE profile
router.post("/", async (req, res) => {
  const { userId, name, center, photo } = req.body;

  if (!userId || !name || !center)
    return res.status(400).json({ error: "userId, name and center are required" });

  try {
    let profile = await Profile.findOne({ userId });

    if (profile) {
      profile.name = name;
      profile.center = center;
      profile.photo = photo;
      await profile.save();
    } else {
      profile = await Profile.create({ userId, name, center, photo });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;