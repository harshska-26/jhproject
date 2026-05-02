const { missingFieldFunc } = require("../utils/missing.util");

const addUserVal = (req, res, next) => {
  const requiredFields = ["username", "email", "number"];
  const MissingFields = missingFieldFunc(requiredFields, req.body);
  if (MissingFields) {
    return res.status(400).json({
      code: "0000",
      message: "Missing required Fields",
      missing: {MissingFields}
    });
  }
  next();
};

module.exports = { addUserVal };
