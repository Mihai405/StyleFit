const express = require("express");
const uploadImage = require("../middleware/uploadImage");
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

router.post("/", uploadImage.single("image"), async (req, res) => {
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
