const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8800, () => {
  console.log("Example app listening on port 8800!");
});
