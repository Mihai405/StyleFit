const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  partner: [{ type: mongoose.Schema.Types.ObjectId, ref: "Partner" }],
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
