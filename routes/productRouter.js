const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getProductList,
  getProductDetails,
  addProduct,
  updateProduct,
  deleteProduct,
  likeProduct,
  removeLikeProduct,
  searchProduct,
} = require("../controllers/productController");
const authCheck = require("../middlewares/auth/authCheck");
const storedProductImage = require("../middlewares/product/storeProductImage");
const checkProductExistence = require("../middlewares/product/checkProductExistence");
const checkOwnership = require("../middlewares/product/checkOwnership");

// base url: /api/product

/**
 * @route  GET /api/product
 * @desc   Products Listing Endpoint
 * @access Public
 */
router.get("/", getProductList);

/**
 * @route  GET /api/search
 * @desc   Search Product Endpoint
 * @access Public
 */
router.get("/search", searchProduct);
//TODO: pagination

/**
 * @route  GET /api/product/details/:id
 * @desc   Product Details Endpoint
 * @access Public
 */
router.get("/details/:id", getProductDetails);

/**
 * @route  POST /api/product/add
 * @desc   Add Product Endpoint
 * @access Private for Seller Account
 */
router.post(
  "/add",
  [authCheck, storedProductImage.array("product_images", 10)],
  addProduct
);
//TODO: check seller auth
//TODO: check product exist

/**
 * @route  PUT /api/product/update/:id
 * @desc   Update Product Endpoint
 * @access Private for Seller Account
 */
router.put(
  "/update/:id",
  [
    authCheck,
    checkProductExistence,
    checkOwnership,
    storedProductImage.array("product_images", 10),
  ],
  updateProduct
);
//TODO: check seller auth
//TODO: check product exist
//TODO: check ownership of product

/**
 * @route  DELETE /api/product/delete/:id
 * @desc   Delete Product Endpoint
 * @access Private for Seller Account
 */
router.delete(
  "/delete/:id",
  [authCheck, checkProductExistence, checkOwnership],
  deleteProduct
);
//TODO: check seller auth
//TODO: check product exist
//TODO: check ownership of product

/**
 * @route  GET /api/product/like/:id
 * @desc   Like Product Endpoint
 * @access Private for Customer Account
 */
router.get("/like/:id", authCheck, likeProduct);
//TODO: check customer auth
//TODO: check product exist

/**
 * @route  GET /api/product/removeLike/:id
 * @desc   Remove Like Product Endpoint
 * @access Private for Customer Account
 */
router.get("/removeLike/:id", authCheck, removeLikeProduct);
//TODO: check customer auth
//TODO: check product exist

module.exports = router;
