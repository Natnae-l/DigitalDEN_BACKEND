const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { required: true, type: String },
    description: { required: true, type: String },
    category: { required: true, type: String },
    price: { required: true, type: Number },
    rating: { type: Number, default: 0 },
    image: { required: true, type: String },
  },
  { timestamps: { createdAt: "created_at" } }
);

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;
