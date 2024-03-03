import express from "express"
import {getGames, getGameByID, getGamesByUserID, createGame} from "../controllers/gamesController.js"
import { getUserByID, getUserBalanceByID } from "../controllers/usersController.js"
const router = express.Router()

// GET GAMES

router.get("/", async (req, res) => {
    const games = await getGames()
    res.status(200).send(games)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const game = await getGameByID(id)

    if(!game) {
        return res.status(400).send({message: "Game not found"})
    }

    res.status(200).send(game)
})

router.get("/user_id/:user_id", async (req, res) =>{
    const user_id = req.params.user_id
    const games = await getGamesByUserID(user_id)

    if(!games) {
        return res.status(400).send({message: "Games not found"})
    }

    res.status(200).send(games)
})

// POST GAMES

router.post("/", async (req, res) => {
    const {row_array, fee, reward, user_id} = req.body
    const user = await getUserByID(user_id)

    if(!user) {
        return res.status(400).send({message: "User not found"})
    }

    const newBalance = Number(user.balance) - Number(fee)
    if(newBalance < 0) {
        return res.status(400).send({message: "Not enough balance"})
    }

    await createGame(row_array, fee, reward, user_id)
})