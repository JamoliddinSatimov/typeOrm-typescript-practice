import { Router } from "express";
import clubController from "../controllers/club.controller";

const clubsRouter = Router()

export default clubsRouter
    .get('/clubs', clubController.GET)
    .post('/newClub', clubController.POST)