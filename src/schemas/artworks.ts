import Joi from "joi";

export const artWorkSchema = Joi.object({
    work_title: Joi.string().required(),
    artist_name: Joi.number().required()
});