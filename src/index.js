const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
