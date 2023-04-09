import { Request, Response } from "express";
import services from "../services/expositions-service.js";
import { Exposition } from "../protocols";

export async function insertExposition(req: Request, res: Response) {
    const exposition = req.body as Exposition;

    try {
        const insertExpo = await services.insertExposition(exposition);
        res.status(201).send(insertExpo);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function getExposition(req: Request, res: Response) {
    try {
        const expositions = await services.getExpositions();
        res.status(200).send(expositions);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function updateExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const newExposition = req.body as Exposition;
    try {
        await services.updateExpo(id, newExposition)
        res.sendStatus(200);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

export async function deleteExposition(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
        const deleted = await services.deleteExpo(id);
        if (deleted === null) {
            return res.sendStatus(404)
        }
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

