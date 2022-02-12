const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoute = require('./routes/product');
const authRoute = require("./routes/auth");
const userRoute = require('./routes/user');
const categoryRoute = require("./routes/category");
const brandRoute = require("./routes/brand");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("ket noi database thanh cong"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/product', productRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/brand',brandRoute);


app.listen(5000, () => {
  console.log("sever backend dang chay");
});
