const express = require("express");
const authCheck = require("../middlewares/auth/authCheck");

const {
  userProfileInfo,
  updateProfileInfo,
} = require("../controllers/profileController");
const router = express.Router();

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Get  /api/profile
 */
router.get("/", authCheck, userProfileInfo);

/**
 * @route   PUT /api/profile/update
 * @desc    Update Profile endpoint
 * @access  Private
 */
router.put("/update", authCheck, updateProfileInfo);

module.exports = router;
