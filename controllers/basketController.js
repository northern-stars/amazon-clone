const Basket = require("../models/BasketModel");
const { validationResult } = require("express-validator");

const get_basket = async (req, res) => {
  try {
    const productList = await Basket.find();
    res.status(200).json(productList);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ errors: [{ message: err.message }] })
      .send("Server Error");
  }
};

const add_basket = async (req, res) => {
  // add to db
  try {
    const { addedProduct } = req.body;
    // Field validation
    const validationErr = validationResult(req);
    if (validationErr.errors?.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }

    // save product
    const newProduct = new Basket({ addedProduct });
    const basketedProduct = await newProduct.save({ new: true });
    res.status(200).json(basketedProduct);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};

const update_basket = async (req, res) => {
  try {
    // validation
    const validationErr = validationResult(req);
    if (validationErr?.errors?.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }
    // update
    const updatedBasket = await Basket.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { ...req.body, status: "updated", updatedDate: Date.now() },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedBasket);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};

const delete_basket = async (req, res) => {
  try {
    await Basket.deleteOne({ _id: req.params.id });
    res.status(200).send("Data is deleted");
  } catch (err) {
    return res
      .status(500)
      .json({ errors: [{ message: err.message }] })
      .send("Server Error");
  }
};

module.exports = { get_basket, add_basket, update_basket, delete_basket };
