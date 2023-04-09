import Joi from "joi";

export const expositionSchema = Joi.object({
    gallery_name: Joi.string().required(),
    artwork: Joi.number().required(),
    artist: Joi.number().required()
});