import Joi from "joi";

export const playersPostValidation = Joi.object().keys({
    name: Joi.string().required().max(32),
    club: Joi.string().required().uuid({
        version:"uuidv4"
    })
})