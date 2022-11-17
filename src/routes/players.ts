import { Router } from "express";
import playerController from "../controllers/player.controller";

const playerRouter = Router()

export default playerRouter
    .get('/players', playerController.GET)
    .post('/newPlayer', playerController.POST)