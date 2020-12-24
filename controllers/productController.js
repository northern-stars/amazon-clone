const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

const getProductList = asyncHandler(async (req, res) => {
  const populateProduct = await Product.find()
    .populate("seller")
    .where("status", /[^deleted]/);
  res.status(200).json(populateProduct);
});

const getProductDetails = asyncHandler(async (req, res) => {
  const productDetails = await Product.findById(req.params.id);
  if (!productDetails) {
    return res
      .status(400)
      .json({ errors: [{ message: "There are no details for this product" }] });
  }
  res.status(200).json(productDetails);
});

const addProduct = asyncHandler(async (req, res) => {
  const { name, price, description, category } = req.body;

  // check if product exist
  const duplicateProduct = await Product.findOne({
    name,
    price,
    description,
    category,
    seller: req.user.id,
  });

  if (duplicateProduct) {
    return res
      .status(400)
      .json({ errors: [{ message: "Product already exists" }] });
  }

  // await Product.create({ ...req.body, seller: req.user.id });
  const product = new Product({ ...req.body, seller: req.user.id });
  const savedProduct = await product.save({ new: true });
  res.status(200).json(savedProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body, status: "updated", updatedDate: Date.now() },
    { new: true, runValidators: true }
  );
  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const deletedProduct = await Product.findOneAndUpdate(
    { _id: req.params.id },
    { status: "deleted", deletedDate: Date.now() },
    { new: true }
  );
  res
    .status(200)
    .json({ deletedProduct, message: "Product has been deleted." });
});

const likeProduct = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user?.likedProducts?.indexOf(req.params.id) === -1) {
    await User.updateOne(
      { _id: req.user.id },
      { $push: { likedProducts: req.params.id } }
    );
    res.status(200).json({
      success: true,
      message: "The product has been added into the Liked Products",
    });
  }
  res.status(200).json({
    success: false,
    message: "The product has already been in the Liked Products",
  });
});

const removeLikeProduct = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user?.likedProducts?.indexOf(req.params.id) > -1) {
    await User.updateOne(
      { _id: req.user.id },
      { $pull: { likedProducts: req.params.id } }
    );
    res.status(200).json({
      success: true,
      message: "The product has been removed from the Liked Products",
    });
  }
  res.status(200).json({
    success: false,
    message: "The product is not in the Liked Products",
  });
});

const searchProduct = asyncHandler(async (req, res) => {
  await Product.find({ name: { $regex: req.query.q } }, (err, arr) => {
    if (err) {
      res.json({ message: err.message });
    }
    res.status(200).json(arr);
  });
});

module.exports = {
  getProductList,
  getProductDetails,
  addProduct,
  updateProduct,
  deleteProduct,
  likeProduct,
  removeLikeProduct,
  searchProduct,
};
