const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("HI");
});

app.listen(3000, console.log("app listening on port 3000"));
