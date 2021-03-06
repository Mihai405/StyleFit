const express = require("express");
const auth = require("../middleware/auth");
const uniqueEmail = require("../middleware/uniqueEmail");
const uploadImage = require("../middleware/uploadImage");
const Appointment = require("../models/appointment");
const router = express.Router();
const Client = require("../models/client");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", uploadImage.single("image"), uniqueEmail, async (req, res) => {
  const client = new Client(req.body);
  try {
    if (req.file) {
      client.image = req.file.buffer;
    }
    await client.save();
    const token = await client.generateAuthToken();
    res.status(201).json({ client, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/appointments", auth, async (req, res) => {
  try {
    if (res.role !== "client") {
      throw new Error("Invalid role");
    }
    const appointments = await Appointment.find({ client: res.user._id })
      .populate("client", "name email")
      .populate("partner", "name email")
      .populate("service", "name price");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/login", async (req, res) => {
  try {
    const client = await Client.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await client.generateAuthToken();
    res.json({ client, token });
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
    const client = await Client.findById(req.params.id);
    if (!client && !client.image) {
      throw new Error("The client doesn't have image");
    }
    res.set("Content-Type", "image/jpg");
    res.send(client.image);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
