require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const auth = require("./middleware/auth");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);

const partnersRouter = require("./routes/partners");
app.use("/partners", partnersRouter);

const serviceRouter = require("./routes/services");
app.use("/services", serviceRouter);

app.get("/me", auth, async (req, res) => {
  res.json(res.user);
});

app.listen(port, () => console.log("Server started on port " + port));
