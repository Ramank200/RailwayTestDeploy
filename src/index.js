const express = require("express");
const Dbrouter = require("./Routes/DatabaseRouter");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("../Database/db");
const userRouter = require("./Routes/UserRouter");
const ProductRouter = require("./Routes/ProductRouter");

app.use(express.json());

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

app.use("/db", Dbrouter);
app.use("/user", userRouter);
app.use("/product", ProductRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
