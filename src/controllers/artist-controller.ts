import { Request, Response } from "express";
import services from "../services/artists-service.js";
import { Artist } from "../protocols";


export async function insertArtist(req: Request, res: Response) {
    const artist = req.body as Artist;

    try {
        const insertArtist = await services.insertArtist(artist);
        res.status(201).send(insertArtist);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}