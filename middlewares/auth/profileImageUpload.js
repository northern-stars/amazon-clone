const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const path = require("path");
// Storage ,FileFilter

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const rootDir = path.dirname(require.main.filename);
//     cb(null, path.join(rootDir, "/public/uploads"));
//   },
//   filename: function (req, file, cb) {
//     //file Mimetype- img,gif,png vs
//     const extension = file.mimetype.split("/")[1];
//     req.savedProfileImage = "image_" + req.user.id + "." + extension;
//     cb(null, req.savedProfileImage);
//   },
// });

// //FileFilter

// const fileFilter = (req, file, cb) => {
//   let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];

//   if (!allowedMimeTypes.includes(file.mimetype)) {
//     return cb(new Error("Please provide a valid image file"), false);
//   }
//   return cb(null, true);
// };

// const profileImageUpload = multer({ storage, fileFilter });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatar_images",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});
const profileImageUpload = multer({ storage: storage });

module.exports = profileImageUpload;

module.exports = profileImageUpload;
