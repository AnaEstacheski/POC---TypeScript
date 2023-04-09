import { Artwork } from "../protocols";
import { insertArtworkRepository } from "../repositories/artworks-repository.js";
import { conflictError } from "../errors/index.js";

async function insertArtwork(artwork: Artwork) {
    const insertArt = await insertArtworkRepository(artwork);
    if(!insertArt) {
        throw conflictError("Artwork already registered");
    }
    return insertArt;
}

const services = {
    insertArtwork
};

export default services;