const express = require("express");
const authCheck = require("../middlewares/auth/authCheck");

const { userProfileInfo } = require("../controllers/profileController");
const router = express.Router();

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/profile
 */
router.get("/", authCheck, userProfileInfo);

module.exports = router;
