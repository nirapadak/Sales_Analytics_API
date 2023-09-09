const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
