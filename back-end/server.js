require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);

const partnersRouter = require("./routes/partners");
app.use("/partners", partnersRouter);

app.listen(port, () => console.log("Server started on port " + port));
