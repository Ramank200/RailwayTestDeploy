const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
// const db = require("../Db/db");

// db.query(
//   "Insert into users (name,age,email) values ('John', 30, 'lMmJ7@example.com')",
//   (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.rows);
//     }
//   }
// );

app.get("/", (req, res) => {
  let Itime = Date.now();
  const { time, proposedTime } = req.query;
  console.log(
    Itime - Number(time),
    " time Diff ms ",
    Itime - Number(proposedTime),
    " proposedTime Diff ms "
  );
  console.log({ proposedTime });
  Itime = Date.now();
  console.log(
    Itime - Number(time),
    " time Diff ms ",
    Itime - Number(proposedTime),
    " proposedTime Diff ms "
  );
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
