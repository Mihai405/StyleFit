const express = require("express");
const app = express();

app.get("/server", async (req, res) => {
  res.send("<h1>Starting Server</h1>");
});

app.listen(4000, () => console.log("Server Started"));
