const {Client} = require("pg")
const dotenv = require("dotenv")
dotenv.config();

const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    port:process.env.DB_PORT,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

client.on('error', (err) => {
    console.error('Database client error:', err.stack);
});

client.connect()
    .then(() => console.log("Database connected"))

module.exports = client;