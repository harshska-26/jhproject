const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { addUserVal } = require("./validations/addUser.validation");
const { addUserCtrl } = require("./controllers/addUser.controller");
const client = require("./database");
const { getOtp } = require("./controllers/getOtp.controller");
const { getUsers } = require("./controllers/getUsers.controller");
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

dotenv.config()
const PORT = process.env.PORT || 3000;

app.get("/getUsers", getUsers)
app.get("/getOtp", getOtp)
app.post("/addUser", addUserVal, addUserCtrl )

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});