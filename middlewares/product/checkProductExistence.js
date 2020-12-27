const Product = require("../../models/ProductModel");
const asyncHandler = require("express-async-handler");

const checkProductExistence = asyncHandler(async (req, res, next) => {
  await Product.findById(req.params.id, (error, response) => {
    if (error) {
      return res
        .status(400)
        .json({ errors: { msg: "There is no product with this ID number." } });
    }
    return next();
  });
});

module.exports = checkProductExistence;
