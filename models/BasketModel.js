const { Schema, Types } = require("mongoose");
const mongoose = require("mongoose");

const BasketSchema = new Schema({
  addedProduct: {
    type: Array,
    id: Types.ObjectId,
    ref: "Product",
  },
  productOwner: {
    type: String,
    id: Types.ObjectId,
    ref: "User",
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

module.exports = Basket = mongoose.model("Basket", BasketSchema);
