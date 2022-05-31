const mongoose = require("mongoose");
const npmValidator = require("validator");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  role: {
    type: String,
    required: true,
    enum: {
      values: ["CLIENT", "TRAINER", "ADMIN"],
      message: "{VALUE} is not supported",
    },
  },
  image: {
    type: Buffer,
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
