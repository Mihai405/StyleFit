const express = require("express");
const uniqueEmail = require("../middleware/uniqueEmail");
const uploadImage = require("../middleware/uploadImage");
const router = express.Router();
const Partner = require("../models/partner");

router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", uploadImage.single("image"), uniqueEmail, async (req, res) => {
  const partner = new Partner(req.body);
  try {
    if (req.file) {
      partner.image = req.file.buffer;
    }
    await partner.save();
    const token = await partner.generateAuthToken();
    res.status(201).json({ partner, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/image", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner && !partner.image) {
      throw new Error("The partner doesn't have image");
    }
    res.set("Content-Type", "image/jpg");
    res.send(partner.image);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
