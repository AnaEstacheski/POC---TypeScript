import Joi from "joi";

export const artistSchema = Joi.object({
    artist_name: Joi.string().required()
});