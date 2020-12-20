const multer = require("multer");
const path = require("path");
// Storage ,FileFilter

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDir = path.dirname(require.main.filename);
    cb(null, path.join(rootDir, "/public/uploads"));
  },
  filename: function (req, file, cb) {
    //file Mimetype- img,gif,png vs
    const extension = file.mimetype.split("/")[1];
    req.savedProfileImage = "image_" + req.user.id + "." + extension;
    cb(null, req.savedProfileImage);
  },
});

//FileFilter

const fileFilter = (req, file, cb) => {
  let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new Error("Please provide a valid image file"), false);
  }
  return cb(null, true);
};

const profileImageUpload = multer({ storage, fileFilter });

module.exports = profileImageUpload;
