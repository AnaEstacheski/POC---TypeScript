import Joi from "joi";

export const expositionSchema = Joi.object({
    gallery_name: Joi.string().required(),
    artwork: Joi.string().required(),
    artist: Joi.string().required()
});