const dotenv = require("dotenv");

dotenv.config();

const config = {
  secret: process.env.SECRET,
  expiresIn: process.env.EXPIRES_IN,
};

module.exports = { config };
