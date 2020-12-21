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
  //TODO avatarImage eklenecek req.file.profile_image  client tarafında farklı işlemler var

  const imageUrl = req.file.path;
  const editInfo = req.body;
  console.log(req.savedProfileImage);
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userProfileInfo,
  updateProfileInfo,
};
