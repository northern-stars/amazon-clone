const express = require("express");
const router = express.Router();
const productRouter = require("./productRouter");
const authRouter = require("./authRouter");

// Only /api endpoint will be used for server

/**
 * @route /api/product
 * @desc Route for Product
 */

// router.use("/product", productRouter);

/**
 * @route /api/auth
 * @desc Route for Auth
 */

router.use("/auth", authRouter);

module.exports = router;
