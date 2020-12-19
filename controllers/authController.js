const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");
// const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/auth/jwtTokenHelpers");
// const comparePassword = require("../helpers/auth/comparePassword");

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  //TODO1 : Input validate  (express-validator ) ✅
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({
      errors: validationErr.array(),
    });
  }
  //TODO2: Check already registered
  try {
    const checkUser = await User.findOne({ email }); // select("-password");
    if (checkUser) {
      return res
        .status(400)
        .json({ errors: [{ message: "User already exists" }] });
    }
    //TODO3: Save the User
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    //TODO4: Authentication (jwt)
    sendJwtToClient(newUser, res);
  } catch (error) {
    next(error);
  }

  //TODO3: Crpyt password 1 method   or pre hooks UserScheme  2 method
  //   const salt = await bcrypt.genSalt(10);
  //   const hashPass = await bcrypt.hash(password, salt);
  //   const newUser = new User({
  //     lastName,
  //     firstName,
  //     email,
  //     password: hashPass,
  //   });

  //

  //   await newUser.save();

  //   const payload = {
  //     firstName: newUser.firstName,
  //     email: newUser.email,
  //     id: newUser._id,
  //   };
  //   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
  //     expiresIn: 3600,
  //   });

  //   //TODO Check token and sendTokenToClient helpers

  //   const token = await newUser.generateJwtFromUser();

  //   if (!token) {
  //     return res
  //       .status(400)
  //       .json({ errors: [{ message: "Couldnt sign the token" }] });
  //   }
  //   //TODO Add CustomError
  //   //TODO Add jwt token add User.methods and Jwt Token Helpers ✅
  //   //TODO Pass hash add User pre hooks ✅
};

module.exports = {
  register,
};
