const express = require("express");
const Item = require("../model/itemModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let createdItem = await Item.find();
    res.json(createdItem);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    let createdItem = await Item.create(req.body);
    res.json(createdItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
