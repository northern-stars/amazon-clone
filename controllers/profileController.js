const User = require("../models/UserModel");

const userProfileInfo = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

const updateProfileInfo = async (req, res, next) => {
  const editInfo = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, editInfo, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userProfileInfo,
  updateProfileInfo,
};
