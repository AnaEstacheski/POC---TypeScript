import prisma from "../config/database.js";
import { Artist } from "../protocols";

export async function insertArtistRepository(artist: Artist) {
    return prisma.artists.create({
        data: artist
    });
}