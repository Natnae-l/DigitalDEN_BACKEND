const express = require("express");
const Item = require("../model/itemModel");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // The folder where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Rename the image file
  },
});

// Create the Multer instance
const upload = multer({ storage: storage });

router.get("/upload", async (req, res, next) => {
  res.sendFile(path.join(__dirname, "n.html"));
});

router.get("/", async (req, res, next) => {
  try {
    let createdItem = await Item.find();
    res.json(createdItem);
  } catch (error) {
    console.log(error.message);
  }
});
router.post("/", upload.single("image"), async (req, res, next) => {
  console.log(req.file);
  try {
    let createdItem = await Item.create(req.body);
    res.json(createdItem);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
