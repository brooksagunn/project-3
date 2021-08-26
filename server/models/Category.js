const mongoose = require("mongoose");

const { Schema } = mongoose;

const Categories = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", Categories);

module.exports = Category;