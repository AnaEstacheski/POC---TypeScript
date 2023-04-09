import { Artwork } from "../protocols";
import { insertArtworkRepository } from "../repositories/artworks-repository.js";

async function insertArtwork(artwork: Artwork) {
    const insertArt = await insertArtworkRepository(artwork);
    return insertArt;
}

const services = {
    insertArtwork
};

export default services;