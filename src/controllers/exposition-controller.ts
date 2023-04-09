import { Request, Response } from "express";
import services from "../services/expositions-service.js";
import { Exposition } from "../protocols";
import httpStatus from "http-status";

export async function insertExposition(req: Request, res: Response) {
    const exposition = req.body as Exposition;

    try {
        const insertExpo = await services.insertExposition(exposition);
        return res.status(httpStatus.OK).send(insertExpo);
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function getExposition(req: Request, res: Response) {
    try {
        const expositions = await services.getExpositions();
        return res.status(httpStatus.OK).send(expositions);
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function updateExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const newExposition = req.body as Exposition;
    try {
        await services.updateExpo(id, newExposition)
        return res.status(httpStatus.OK)
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function deleteExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const deleted = await services.deleteExpo(id);
        if (deleted === null) {
            return res.status(httpStatus.NOT_FOUND)
        }
        return res.status(httpStatus.OK)
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

