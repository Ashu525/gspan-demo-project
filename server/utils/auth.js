const jwt = require("jsonwebtoken");
const { config } = require("./config");

const authenticate = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, config.secret);
    console.log("valid token", decoded);
    next();
  } catch (err) {
    res.status(401);
    return res.json({ msg: "Invalid token!" });
  }
};

module.exports = { authenticate };
