import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { invalidDataError } from "../errors/index.js";
import httpStatus from "http-status";

export function schemaValidation(schema: ObjectSchema<any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (!error) {
            next();
        } else {
            res.status(httpStatus.BAD_REQUEST).send(invalidDataError(error.details.map((d) => d.message)));
        }
    };
}