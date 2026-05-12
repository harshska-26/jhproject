const jwt = require("jsonwebtoken");
const client = require("../database");
const bcrypt = require("bcryptjs")

const loginCtrl = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const result = await client.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );
    const user = result.rows[0];

    //user check
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //Sign-in Token
    const token = jwt.sign(
      { id: user.id, auth_level: "password verified" },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      },
    );

    //Sending Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000,
    });

    return res.json({ message: "Login successful" });
  } catch (e) {
    console.log(`error at login Controller : ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { loginCtrl };
