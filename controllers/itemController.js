const path = require("path");
const fs = require("fs");
const express = require("express");
const Item = require("../model/itemModel");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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
  res.sendFile(path.join(__dirname, "../n.html"));
});

router.get("/", async (req, res, next) => {
  try {
    let createdItem = await Item.find();
    res.json(createdItem);
  } catch (error) {
    next(error);
  }
});
router.post("/", upload.single("image"), async (req, res, next) => {
  const { filename, destination } = req.file;

  try {
    let result = await cloudinary.uploader.upload(
      req.file.destination + req.file.filename
    );
    console.log(result);
    fs.unlink(path.join(__dirname, "../" + destination + filename), (err) => {
      if (err) console.log(err);
      else {
        console.log("Deleted");
      }
    });

    let createdItem = await Item.create(req.body);
    res.json(createdItem);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
