import { Artist } from "../protocols";
import { insertArtistRepository } from "../repositories/artists-repository.js";
import { conflictError } from "../errors/index.js";

async function insertArtist(artist: Artist) {
    const insArtist = await insertArtistRepository(artist);
    if(!insArtist) {
        throw conflictError("Artist already registered");
    }
    return insArtist;
}

const services = {
    insertArtist
};

export default services;