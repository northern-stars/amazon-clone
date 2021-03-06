const express = require("express");
const { body, validationResult, check } = require("express-validator");
const {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
  imageUpload,
} = require("../controllers/authController");
const authCheck = require("../middlewares/auth/authCheck");
const profileImageUpload = require("../middlewares/auth/profileImageUpload");

const router = express.Router();
/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/register
 */
router.post(
  "/register",
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  register
);

/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/login
 */
router.post(
  "/login",
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  login
);
/**
 * @access : Private
 * @desc : Register endpoint
 * @route :Post  /api/auth/logout
 */
router.get(
  "/logout",
  authCheck,
  //TODO: authCheck Midd. Added
  logout
);
/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */
router.get("/user", authCheck, currentUser);
/**
 * @route   Post api/auth/forgotpassword
 * @desc    Post user data
 * @access  Public
 */
router.post("/forgotpassword", forgotPassword);

/**
 * @route   PUT api/auth/resetpassword
 * @desc    PUT user data
 * @access  Public
 */
router.put("/resetpassword", resetPassword);
/**
 * @route   PUT api/auth/upload
 * @desc    PUT user data
 * @access  Pravite
 */
router.post(
  "/upload",
  [authCheck, profileImageUpload.single("profile_image")],
  imageUpload
);
module.exports = router;
