import prisma from "../config/database.js";
import { Artwork } from "../protocols";

export async function insertArtworkRepository(artwork: Artwork) {
    return prisma.artworks.create({
        data: artwork
    });
}

