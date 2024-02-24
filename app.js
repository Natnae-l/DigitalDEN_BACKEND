const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");

const app = express();
// connect dotenv file
require("dotenv").config();

// req parser middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middlewares
app.use(CORS());

// connect databse and start the server

mongoose
  .connect(process.env.mongoDB)
  .then(() =>
    app.listen(
      process.env.PORT,
      console.log("app listening on port " + process.env.PORT)
    )
  )
  .catch((err) => console.log(err.message));

app.get("/", (req, res, next) => {
  res.send("HI");
});
