const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { json } = require("express");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("ket noi database thanh cong"))
  .catch((err) => console.log(err));

  console.log("heell");

app.listen(5000, () => {
  console.log("sever backend dang chay");
});
