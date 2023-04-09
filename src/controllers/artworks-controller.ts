import { Request, Response } from "express";
import services from "../services/artworks-service.js";
import { Artwork } from "../protocols";
import httpStatus from "http-status";

export async function insertArtWork(req: Request, res: Response) {
    const artwork = req.body as Artwork;

    try {
        const insertArt = await services.insertArtwork(artwork);
        return res.status(httpStatus.OK).send(insertArt);
    } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}