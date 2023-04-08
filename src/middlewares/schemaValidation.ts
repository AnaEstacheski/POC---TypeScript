import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { invalidDataError } from "../errors/index.js";

export function schemaValidation(schema: ObjectSchema<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (!error) {
            next();
        } else {
            res.status(400).send(invalidDataError(error.details.map((d) => d.message)));
        }
    };
}