const express = require("express");
const router = express.Router();
const productRouter = require("./productRouter");

// Only /api endpoint will be used for server

/**
 * @route /api/product
 * @desc Route for Product
 */

// router.use("/product", productRouter);

module.exports = router;
