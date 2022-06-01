const mongoose = require("mongoose");
const npmValidator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs/dist/bcrypt");

const clientSchema = new mongoose.Schema({
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
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
});

clientSchema.methods.generateAuthToken = async function () {
  const client = this;
  const token = jwt.sign(
    { _id: client._id.toString() },
    process.env.JWT_SECRET
  );

  client.tokens = client.tokens.concat({ token });
  await client.save();
  return token;
};

clientSchema.methods.toJSON = function () {
  const client = this;
  const clientObject = client.toObject();

  delete clientObject.password;
  delete clientObject.tokens;
  delete clientObject.image;
  return clientObject;
};

clientSchema.pre("save", async function (next) {
  const client = this;
  if (client.isModified("password")) {
    client.password = await bcrypt.hash(client.password, 8);
  }
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
