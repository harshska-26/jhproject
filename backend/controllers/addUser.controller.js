const client = require("../database");

const addUserCtrl = async (req, res) => {
    try {
        const {username, first_name, last_name, dob, email, number, password } = req.body;
        const query = `
        INSERT INTO users (username, first_name, last_name, "date-of-birth", email,"phone number", password) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
        `;
        const result = await client.query(query, [username, first_name, last_name, dob, email, number, password]);
        res.status(201).json(result.rows[0]);
        console.log("ADDED");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addUserCtrl };
