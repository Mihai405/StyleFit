const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Appointment = mongoose.model("Service", appointmentSchema);
module.exports = Appointment;
