const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { addUserVal } = require("./validations/addUser.validation");
const { addUserCtrl } = require("./controllers/addUser.controller");
const client = require("./database");


dotenv.config()

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/getUsers", async (req, res) => {
    try{
        const result = await client.query("SELECT * FROM users ORDER BY id ASC");
        res.status(200).json({users : result.rows})
    }catch(e){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.post("/addUser", addUserVal, addUserCtrl )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});