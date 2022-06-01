const Client = require("../models/client");
const Partner = require("../models/partner");
const uniqueEmail = async (req, res, next) => {
  const client = await Client.findOne({ email: req.body.email });
  if (client) {
    return res.status(400).json({ message: "Email is already used" });
  }
  const partner = await Partner.findOne({ email: req.body.email });
  if (partner) {
    return res.status(400).json({ message: "Email is already used" });
  }
  next();
};

module.exports = uniqueEmail;
