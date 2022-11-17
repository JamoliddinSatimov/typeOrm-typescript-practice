import Joi from "joi";

export const clubsPostValidation = Joi.object().keys({
    name: Joi.string().required().max(32)
})