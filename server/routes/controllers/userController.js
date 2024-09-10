const jwt = require("jsonwebtoken");
const { config } = require("../../utils/config");

const signup = (req, res) => {
  const { name, email, password } = req.body;
  // insert the data in the database
  res.json({ msg: "User registered successfully" });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ msg: "Please provide correct email and password" });
  const token = jwt.sign({ email, password }, config.secret, {
    expiresIn: config.expiresIn,
  });
  res.json({ msg: "User logged in successfully", token: token });
};

const profile = (req, res) => {
  // fetch data from db
  res.json({ user: { name: "Ashutosh", email: "ashu@gmail.com" } });
};

module.exports = { signup, login, profile };
