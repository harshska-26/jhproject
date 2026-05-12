const jwt = require("jsonwebtoken");

const authMiddleware = (requiredLevel) => {
  return (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("No Session");

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decoded.auth_level === requiredLevel || decoded.auth_level === 'full') {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: "Incomplete authentication" });
      }
    } catch (e) {
      res.status(401).send("Invalid Session");
    }
  };
};

module.exports = { authMiddleware };
