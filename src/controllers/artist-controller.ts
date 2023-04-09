import { Request, Response } from "express";
import services from "../services/artists-service.js";
import { Artist } from "../protocols";
import httpStatus from "http-status";

export async function insertArtist(req: Request, res: Response) {
    const artist = req.body as Artist;

    try {
        const insertArtist = await services.insertArtist(artist);
        return res.status(httpStatus.OK).send(insertArtist);
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}