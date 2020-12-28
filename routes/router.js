const express = require("express");
const router = express.Router();
const productRouter = require("./productRouter");
const authRouter = require("./authRouter");
const profileRouter = require("./profileRouter");
const basketRouter = require("./basketRouter");

// Only /api endpoint will be used for server

/**
 * @route /api/product
 * @desc Route for Product
 */

router.use("/product", productRouter);

/**
 * @route /api/auth
 * @desc Route for Auth
 */

router.use("/auth", authRouter);

/**
 * @route /api/profile
 * @desc Route for Profile
 */

router.use("/profile", profileRouter);

/**
 * @route /api/basket
 * @desc Route for Basket
 */

 router.use("/basket", basketRouter)

module.exports = router;
