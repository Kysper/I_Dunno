const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const path = require("path");

const router = express.Router();

//POST TO SERVER TO CREATE USER
router.post("/users/sign-up", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    // console.log(token);
    res.status(201).redirect("/users/login");
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

router.get("/users/sign-up", async (req, res) => {
  //Route to Sign-up Page
  res.sendFile(path.join(__dirname, "../../../public", "sign-up.html"));
});

//USES EMAIL/PASSWORD TO LOGIN TO ACCESS PROFILE
router.post("/users/login", async (req, res, next) => {
  try {
    let isLoggedIn = false;
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      isLoggedIn;
      return res
        .status(401)
        .send('Email/Password not correct. Try again.');
    }
    const token = await user.generateAuthToken();
    console.log("Login successful!");
    isLoggedin = true;
    res.redirect('/')
    return isLoggedin
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

router.get(`/users/login`, (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public", "login.html"));
});

router.get("/users/profile", auth, async (req, res) => {
  res.send(req.user);
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
