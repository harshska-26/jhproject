const {Client} = require("pg")

const client = ({
    host:"localhost",
    user:"postgres",
    port:5432,
    password: "Mohar123jvyy",
    database:"postgres"
})

client.connect().then(()=> console.log("connected"));

module.exports = client;