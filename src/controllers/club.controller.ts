import { NextFunction, Request, Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Clubs } from "../entities/club.entity";
import { ErrorHandler } from "../errors/error";
import { clubsPostValidation } from "../validation/clubs.validation";


export default {
    GET: async(_: Request, res: Response, next: NextFunction) => {

        const allClubs = await dataSource.getRepository(Clubs)
        .find({
            relations: {
                players: true
            }
        }).catch(err => next(new ErrorHandler(err.message, 503)))

        if(allClubs) res.json({ success: true, allClubs })
    },

    POST: async(req: Request, res: Response, next: NextFunction) => {

        const { error, value } = clubsPostValidation.validate(req.body)

        if (error) {
            return next(new ErrorHandler(error.message, 400))
        }

        const { name } = value

        const newClub = await dataSource.createQueryBuilder()
        .insert()
        .into(Clubs)
        .values({
            name
        }).returning(["id", "name"])
        .execute()
        .catch(err => next(new ErrorHandler(err.message, 503)))

        if (newClub) {
            res.json({ success: true, newClub })
        }

    }
}