import { Request, Response } from "express";
import services from "../services/artworks-service.js";
import { Artwork } from "../protocols";

export async function insertArtWork(req: Request, res: Response) {
    const artwork = req.body as Artwork;

    try {
        const insertArt = await services.insertArtwork(artwork);
        res.status(201).send(insertArt);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}