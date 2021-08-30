const mongoose = require("mongoose");

const { Schema } = mongoose;

const Products = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  }
});

const Product = mongoose.model("Product", Products);
module.exports = Product;
