const client = require("../database");

const addUserCtrl = async (req, res) => {
    try {
        const { username, email, number } = req.body;
        const query = `
        INSERT INTO users (username, email,"phone number") 
        VALUES ($1, $2, $3)
        RETURNING *;
        `;
        const result = await client.query(query, [username, email, number]);
        res.status(201).json(result.rows[0]);
        console.log("ADDED");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addUserCtrl };
