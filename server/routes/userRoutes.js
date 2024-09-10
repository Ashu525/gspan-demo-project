const express = require("express");
const { signup, login, profile } = require("./controllers/userController");
const { authenticate } = require("../utils/auth");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/profile", authenticate, profile);

module.exports = router;
