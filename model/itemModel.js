const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { required: true, type: String },
    description: { required: true, type: String },
    price: { required: true, type: Number },
    rating: { required: true, type: Number },
    image: { required: true, type: String },
  },
  { timestamps }
);

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;
