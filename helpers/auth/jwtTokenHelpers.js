const sendJwtToClient = (user, res) => {
  //generete jwt
  const token = user.generateJwtFromUser();
  // TODO: token save cookie
  //response
  return res.status(200).json({
    success: true,
    access_token: token,
    user: {
      firstName: user.firstName,
      email: user.email,
      id: user._id,
    },
  });
};

const isTokenIncluded = (req) => {
  return req.header("x-auth-token");
};

const getAccessTokenFromHeaders = (req) => {
  const access_token = req.header("x-auth-token");
  return access_token;
};

module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccessTokenFromHeaders,
};
