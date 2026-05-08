const { missingFieldFunc } = require("../utils/missing.util");

const getUserVal = (req, res, next) => {
  const { username } = req.query;
  if (!username) {
    return res.status(400).json({
      code: "0000",
      message: "Missing required Fields",
    });
  }
  next();
};

module.exports = { getUserVal };