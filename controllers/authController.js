const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");
const sendEmail = require("../helpers/auth/sendEmail");
const { sendJwtToClient } = require("../helpers/auth/jwtTokenHelpers");
const comparePassword = require("../helpers/auth/comparePassword");

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

const login = async (req, res, next) => {
  const { email, password } = req.body;
  //TODO1 : Input validate  (express-validator ) ✅
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({
      errors: validationErr.array(),
    });
  }

  //TODO2: Check already registered ✅
  const user = await User.findOne({ email }).select("+password"); // select("-password");
  if (!user) {
    return res
      .status(400)
      .json({ errors: [{ message: "User does not  exists" }] });
  }

  //TODO:3 Compare Password ✅
  if (!comparePassword(password, user.password)) {
    return res
      .status(400)
      .json({ errors: [{ message: "Please check  your credentials!" }] });
  }
  sendJwtToClient(user, res);
};

const logout = async (req, res, next) => {
  //TODO:1 Cookie Clear and Client LocalStorage Clear
  return res.status(200).json({
    success: true,
    message: "Logout Successfull",
  });
};
const currentUser = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res
      .status(400)
      .json({ errors: [{ message: "User does not exist" }] });
  }
  return res.status(200).json({
    success: true,
    user: user,
  });
};

const forgotPassword = async (req, res, next) => {
  const resetEmail = req.body.email;
  const user = await User.findOne({ email: resetEmail });
  if (!user) {
    return res
      .status(400)
      .json({ errors: [{ message: "There is no user with that email" }] });
  }

  const resetPassToken = user.getResetPasswordToken();

  await user.save();

  const resetPassUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${user.resetPasswordToken}`;

  const emailTemplate = `
  <h3>Reset Your Password</h3>

  <p>This <a href="${resetPassUrl}" target = '_blank'>This click Link</a> will expire in 1 hour </p>

  `;

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: "Reset Your  Password ",
      html: emailTemplate,
    });
    res.status(200).json({
      success: true,
      message: "Token Sent To Your Email",
      // data: user,
    });
  } catch (error) {
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;

    await user.save();

    return res
      .status(500)
      .json({ errors: [{ message: "Email Could not be sent" }] });
  }
};

const resetPassword = async (req, res, next) => {
  const { resetPasswordToken } = req.query;
  const { password } = req.body;

  if (!resetPasswordToken) {
    return res
      .status(400)
      .json({ errors: [{ message: "Please provide a valid token" }] });
  }

  let user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(404)
      .json({ errors: [{ message: "Invalid token or session expired" }] });
  }

  user.password = password;

  user.resetPasswordToken = null;
  user.resetPasswordExpire = null;

  await user.save();

  return res.json({ success: true, message: "Reset Password Successful" });
};

module.exports = {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
};
