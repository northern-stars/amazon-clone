const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 100,
    minlength: 2,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    default:
      "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg",
  },
  category: {
    //TODO: Category Model will be added
    // ref: Category Model
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  seller: {
    //TODO: User Model will be added
    // ref: User Model Name
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
