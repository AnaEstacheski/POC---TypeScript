import Joi from "joi";

export const artistSchema = Joi.object({
    name: Joi.string().required()
});