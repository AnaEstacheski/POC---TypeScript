import { Artist } from "../protocols";
import { insertArtistRepository } from "../repositories/artists-repository.js";

async function insertArtist(artist: Artist) {
    const insArtist = await insertArtistRepository(artist);
    return insArtist;
}

const services = {
    insertArtist
};

export default services;