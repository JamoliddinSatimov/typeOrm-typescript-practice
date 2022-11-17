import { NextFunction, Request, Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Players } from "../entities/player.entity";
import { ErrorHandler } from "../errors/error";
import { playersPostValidation } from "../validation/players.validation";

export default {
    GET: async(_: Request, res: Response, next: NextFunction) => {

        const allPlayers = await dataSource.getRepository(Players).find({
            relations: {
                club: true
            }
        })
        .catch(err => next(new ErrorHandler(err.message, 503)))

        if(allPlayers) res.json({ succes: true, allPlayers })
    },
    POST: async(req: Request, res: Response, next: NextFunction) => {

        const {error, value} = playersPostValidation.validate(req.body)

        if (error) {
            return next(new ErrorHandler(error.message, 400))
        }

        const { name, club } = value

       const newUser = await dataSource
       .createQueryBuilder()
       .insert()
       .into(Players)
       .values({
        name,
        club
       }).returning(["id", "name"])
       .execute()
       .catch(err => next(new ErrorHandler(err.message, 503)))

        if(newUser) res.json({ succes: true, newUser })
    }
}