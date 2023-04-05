import Joi from "joi";

export const artWorkSchema = Joi.object({
    artwork: Joi.string().required()
});