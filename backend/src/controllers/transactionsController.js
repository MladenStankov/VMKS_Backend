import pool from "../database/database.js"

export async function getTransactions() {
    const [results] = await pool.query("SELECT * FROM transactions")
    return results
}

export async function getTransactionById(id) {
    const [results] = await pool.query("SELECT * FROM transactions WHERE id = ?", [id])
    return results[0]
}

export async function getTransactionsByUserID(user_id) {
    const [results] = await pool.query("SELECT * FROM transactions WHERE user_id = ?", [user_id])
    return results
}

export async function createTransaction(type, user_id, amount) {
    const result = await pool.query(
        "INSERT INTO transactions (type, user_id, amount) VALUES(?, ?, ?)", [type, user_id, amount]
    )

    return result
}