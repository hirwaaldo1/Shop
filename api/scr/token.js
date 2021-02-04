require("dotenv").config();
const { sign } = require("jsonwebtoken");
const User = require("../model/user");
const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2m",
  });
};
const createRefreshToken = (userId) => {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "100d",
  });
};
const sendAccessToken = (res, req, accesstoken) => {
  User.find(
    {
      email: req.body.email,
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Access token errors",
        });
      } else {
        const user = users[0];
        res.send({
          accesstoken,
          email: req.body.email,
          username: user.username,
          id: user.id,
        });
      }
    }
  );
};
const sendRefreshToken = (res, refreshtoken) => {
  res.cookie("refreshtoken", refreshtoken, {
    httpOnly: true,
    path: "/refresh_token",
  });
};
module.exports = {
  createRefreshToken,
  createAccessToken,
  sendAccessToken,
  sendRefreshToken,
};
