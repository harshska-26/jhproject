const client = require("../database");

const getUserCtrl = async(req, res) => {
    try{
        const {username} = req.query;
        console.log(username)
        const query = `
            SELECT * FROM users
                WHERE username = $1;
        `;    
       const result = await client.query(query, [username])
        res.status(200).json(result.rows[0])
    }catch(e){
        console.log(e.message);
        res.status(500).json({ error: "Internal Server Error" });
        throw e;
    }
}

module.exports = {getUserCtrl}