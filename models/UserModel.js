const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a firtName"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a lastName"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide a email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  //TODO: Password regex added
  // //// at least one number, one lowercase and one uppercase letter
  //       // at least six characters
  //       regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  // regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/) //special/number/capital
  password: {
    type: String,
    minlength: [6, "Please provide a password with min lenght 6"],
    required: [true, "Please provide a password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  role: {
    type: String,
    default: "customer",
    enum: ["seller", "customer", "admin"],
  },
  likesProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  avatarImg: {
    type: String,
    default: "default.jpg",
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});

// post eklenecek

//Methods
UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY } = process.env;
  const payload = {
    id: this._id,
    firstName: this.firstName,
    email: this.email,
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: 3600,
  });

  return token;
};

// generete reset password token

UserSchema.methods.getResetPasswordToken = function () {
  const randomHexString = crypto.randomBytes(15).toString("hex");
  // console.log(randomHexString);
  const { RESET_PASSWORD_EXPIRE } = process.env;
  const resetPassToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");

  this.resetPasswordToken = resetPassToken;
  this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);
};

//Pre Hooks
UserSchema.pre("save", async function (next) {
  //code write(pass hash)
  // console.log(this);

  //update for user
  if (!this.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(this.password, salt);
    this.password = hashPass;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
