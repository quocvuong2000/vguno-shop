const router = require("express").Router();
var CryptoJS = require("crypto-js");

const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const userInfo = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.VUONG_SEC_PASS
    ),
    email: req.body.email,
  });
  try {
    const register = await userInfo.save();
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Thông tin đăng nhập không hợp lệ");

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.VUONG_SEC_PASS
    );

    const password = hashPassword.toString(CryptoJS.enc.Utf8);

    password !== req.body.password &&
      res.status(401).json("Thông tin đăng nhập không hợp lệ");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
