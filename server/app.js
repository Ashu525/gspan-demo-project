const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.use("/user", userRoutes);

app.listen(3001, (err) => {
  console.log("Listening on 3001");
});
