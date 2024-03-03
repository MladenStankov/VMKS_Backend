import express from "express"
import { getTransactions, getTransactionById, getTransactionsByUserID, createTransaction } from "../controllers/transactionsController.js"
import { getUserByID, getUserBalanceByID, updateUserBalanceByID } from "../controllers/usersController.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const transactions = await getTransactions()
    res.status(200).send(transactions)
})

router.get("/id:id", async (req, res) => {
    const id = req.params.id
    const transaction = await getTransactionById(id)

    if(!transaction) {
        return res.status(404).send({message: "Transaction not found"})
    }
    res.status(200).send(transaction)
})

router.get("/user_id/:user_id", async (req, res) => {
    const user_id = req.params.user_id
    const transactions = await getTransactionsByUserID(user_id)

    if(!transactions) {
        return res.status(404).send({message: "Transaction not found"})
    }
    res.status(200).send(transactions)
})

router.post("/create", async(req, res) => {
    const {type, user_id, amount} = req.body

    if(!await getUserByID(user_id)) {
        return res.status(404).send({message: "User not found"})
    }

    const newBalance = Number(await getUserBalanceByID(user_id)) + Number(amount)
    if(newBalance < 0) {
        return res.status(400).send({message: "Not enough balance"})
    }

    await createTransaction(type, user_id, amount)
    await updateUserBalanceByID(user_id, newBalance)
})

export default router