const User = require("../models/UserModel");
const CustomError = require("../helpers/error/CustomError");
const asyncHandler = require("express-async-handler");

const userProfileInfo = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

const updateProfileInfo = asyncHandler(async (req, res, next) => {
  //TODO avatarImage eklenecek req.file.profile_image  client tarafında farklı işlemler var
  const imageUrl = req.file.path;
  const editInfo = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      ...editInfo,
      avatarImg: imageUrl,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    user,
  });
});

module.exports = {
  userProfileInfo,
  updateProfileInfo,
};
