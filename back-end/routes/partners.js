const express = require("express");
const auth = require("../middleware/auth");
const uniqueEmail = require("../middleware/uniqueEmail");
const uploadImage = require("../middleware/uploadImage");
const router = express.Router();
const Partner = require("../models/partner");
const Service = require("../models/service");

router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/services", auth, async (req, res) => {
  try {
    if (res.role !== "partner") {
      throw new Error("Invalid role");
    }
    const services = await Service.find({ partner: res.user._id });
    res.json(services);
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

router.post("/services", auth, async (req, res) => {
  try {
    console.log(res.role);
    if (res.role !== "partner") {
      throw new Error("Invalid role");
    }
    const service = await new Service({
      ...req.body,
      partner: res.user._id,
    });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/login", async (req, res) => {
  try {
    const partner = await Partner.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await partner.generateAuthToken();
    res.json({ partner, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/logout", auth, async (req, res) => {
  try {
    res.user.tokens = res.user.tokens.filter(
      (token) => token.token !== res.token
    );
    await res.user.save();
    res.json({ message: "Log Out" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/logoutAll", auth, async (req, res) => {
  try {
    res.user.tokens = [];
    await res.user.save();
    res.json({ message: "Log Out from all devices" });
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
