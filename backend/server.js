const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config()

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/getRequest", (req, res) => {
    return res.status(200).json("Sign-in Successful")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});