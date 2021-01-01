const User = require("../models/UserModel");
const mongoose = require('mongoose');

const addProduct = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.user.id },
      { $push: { basket: req.params.id } }
    );
    res.status(200).json({
      success: true,
      message: "Product has been added to the basket",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getBasket = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("basket");
    res.status(200).json({ success: true, basket: user.basket });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const removeProduct = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    console.log(req.params.id);
    console.log(user.basket);
    if (user.basket.includes(req.params.id)) {
      await User.updateOne(
        { _id: req.user.id },
        { $pull: { basket: req.params.id } }
      );
      res.status(200).json({
        success: true,
        message: "Product has been removed from the basket",
      });
    }
    res.status(200).json({
      success: true,
      message: "There is no product with this id",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getBasket, addProduct, removeProduct };
