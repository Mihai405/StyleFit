require("dotenv").config();
const jwt = require("jsonwebtoken");
const Client = require("../models/client");
const Parnter = require("../models/partner");

const auth = async (req, res, next) => {
  let client;
  let partner;
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === "client") {
      client = await Client.findOne({
        _id: decoded._id,
        "tokens.token": token,
      });
      if (client) {
        res.token = token;
        res.role = decoded.role;
        res.user = client;
      }
    }

    if (decoded.role === "partner") {
      partner = await Parnter.findOne({
        _id: decoded._id,
        "tokens.token": token,
      });
      if (partner) {
        res.token = token;
        res.role = decoded.role;
        res.user = partner;
      }
    }

    if (!client && !partner) {
      throw new Error("");
    }

    next();
  } catch (err) {
    res.status(401).json({ error: "Please authenticate." });
  }
};

module.exports = auth;
