const Product = require("../../models/ProductModel");
const asyncHandler = require("express-async-handler");

const checkOwnership = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log(product.seller._id)
  console.log(req.user.id)
  if (product.seller._id == req.user.id) {
    return next();
  }
  return res.status(400).json({
    errors: { msg: "You are not seller of this product." },
  });
});

module.exports = checkOwnership;
