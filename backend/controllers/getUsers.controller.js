const client = require("../database");

const getUsers = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users ORDER BY id ASC");
    res.status(200).json({ users: result.rows });
  } catch (e) {
    console.error("DATABASE ERROR:", e.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUsers };
