const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "created",
  },
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
  category: [
    {
      type: String,
      enum: [
        "Books",
        "Films, TV, Music & Games",
        "Electronics & Computers",
        "Home, Garden, Pets & DIY",
        "Toys, Children & Baby",
        "Clothes, Shoes & Watches",
        "Sports & Outdoors",
        "Food & Grocery",
        "Health & Beauty",
        "Car & Motorbike",
        "Business, Industry & Science",
      ],
      required: [true, "Please provide a category"],
    },
  ],
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
  },
  deletedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
