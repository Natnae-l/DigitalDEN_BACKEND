const express = require("express");
const Item = require("../model/itemModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let createdItem = await Item.find();
    res.json(createdItem);
  } catch (error) {
    console.log(error.message);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let createdItem = await Item.create(req.body);
    res.json(createdItem);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
