import mysql from "mysql"

const connetion= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vidyb"
})

export default connetion;