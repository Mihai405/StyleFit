const express = require("express");
const auth = require("../middleware/auth");
const Appointment = require("../models/appointment");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("client", "name email")
      .populate("partner", "name email")
      .populate("service", "name price");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
