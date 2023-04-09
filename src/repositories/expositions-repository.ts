import prisma from "../config/database.js";
import { Exposition } from "../protocols";

export async function insertExpositionRepository(exposition: Exposition) {
    return prisma.expositions.create({
        data: exposition
    })

}

export async function getExpositionRepository() {
    return prisma.expositions.findMany();
}

export async function updateExpositionRepository(exposition: Exposition, id: number) {
    return prisma.expositions.upsert({
        where: {
            id
        },
        create: exposition,
        update: exposition
    })
}

export async function deleteExpositionRepository(id: number) {
    return prisma.expositions.delete({
        where: {
            id
        }
    });
}