const jwt = require("jsonwebtoken");

const {
  isTokenIncluded,
  getAccessTokenFromHeaders,
} = require("../../helpers/auth/JwtTokenHelpers");
const authCheck = async (req, res, next) => {
  //token check
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    //status: 401_unauth  403_ forbidden
    return res.status(400).json({
      errors: [{ message: "You are not authorized to access this route" }],
    });
  }
  const accessToken = await getAccessTokenFromHeaders(req);

  // console.log(accessToken);
  //1 method
  // const verified = jwt.verify(accessToken, JWT_SECRET_KEY);
  // if (!verified) {
  //   return next(
  //     new CustomError("Token verification failed, authorization denied.", 401)
  //   );
  // }

  // req.user = {
  //   id: verified.id,
  //   firstName: verified.firstName,
  // };
  // next();
  // 2. Method
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        errors: [
          { message: "Token verification failed, authorization denied" },
        ],
      });
    }
    req.user = {
      id: decoded.id,
      firstName: decoded.firstName,
      email: decoded.email,
    };
    next();
  });
};

module.exports = authCheck;
