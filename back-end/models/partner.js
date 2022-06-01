const mongoose = require("mongoose");
const npmValidator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs/dist/bcrypt");

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return npmValidator.isEmail(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
  job: {
    type: String,
    required: true,
  },
});

partnerSchema.methods.generateAuthToken = async function () {
  const partner = this;
  const token = jwt.sign(
    { _id: partner._id.toString(), role: "partner" },
    process.env.JWT_SECRET
  );

  partner.tokens = partner.tokens.concat({ token });
  await partner.save();
  return token;
};

partnerSchema.methods.toJSON = function () {
  const partner = this;
  const partnerObject = partner.toObject();

  delete partnerObject.password;
  delete partnerObject.tokens;
  delete partnerObject.image;
  return partnerObject;
};

partnerSchema.statics.findByCredentials = async (email, password) => {
  const partner = await Partner.findOne({ email });
  if (!partner) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, partner.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  return partner;
};

partnerSchema.pre("save", async function (next) {
  const partner = this;
  if (partner.isModified("password")) {
    partner.password = await bcrypt.hash(partner.password, 8);
  }
});

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;
