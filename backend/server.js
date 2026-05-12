const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config()
const { addUserVal } = require("./validations/addUser.validation");
const { addUserCtrl } = require("./controllers/addUser.controller");
const client = require("./database");
const { getOtp } = require("./controllers/getOtp.controller");
const { getUsers } = require("./controllers/getUsers.controller");
const { getUserVal } = require("./validations/getUser.validation");
const { getUserCtrl } = require("./controllers/getUser.controller");
const { loginCtrl } = require("./controllers/login.controller");
const { authMiddleware } = require("./middleware/auth.middleware");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}))

const PORT = process.env.PORT || 3000;

app.post("/login", loginCtrl)
app.get("/getUsers", (req, res) => {
  const token = jwt.sign({ auth_level: "guest" }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });
  res.cookie("token", token, { httpOnly: true }).json({ message: "Session initialized" });
})
app.get("/getOtp", getOtp)
app.post("/addUser", addUserVal, addUserCtrl )
app.get("/getUser", getUserVal, getUserCtrl )

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});