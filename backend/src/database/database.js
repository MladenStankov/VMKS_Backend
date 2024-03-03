import mysql from "mysql2"

const pool = mysql
    .createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "Slot_Machine"
    })
    .promise();

export default pool