const express = require("express");
const auth = require("../middleware/auth");
const Appointment = require("../models/appointment");
const router = express.Router();
const Service = require("../models/service");

router.post("/:id/appointments", auth, async (req, res) => {
  const service = await Service.findById(req.params.id);
  try {
    if (res.role !== "client") {
      throw new Error("Invalid role");
    }
    const appointment = new Appointment({
      ...req.body,
      service: service._id,
      client: res.user._id,
      partner: service.partner,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
