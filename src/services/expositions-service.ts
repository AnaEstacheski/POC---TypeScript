import { Exposition } from "../protocols";
import { conflictError, notFoundError } from "../errors/index.js";
import {
    insertExpositionRepository, getExpositionRepository,
    updateExpositionRepository, deleteExpositionRepository
}   from "../repositories/expositions-repository.js";


async function insertExposition(exposition: Exposition) {
    const insertExpo = await insertExpositionRepository(exposition);
    if(!insertExpo) {
        throw conflictError("Exposition already registered");
    }
    return insertExpo;
}

async function getExpositions() {
    const expositions = await getExpositionRepository();
    if(!notFoundError) {
        throw notFoundError();
    }
    return expositions;
}

async function updateExpo(id: number, exposition: Exposition) {
    const { gallery_name, artwork, artist } = exposition;
    const updateExpo = await updateExpositionRepository(exposition, id);
    return updateExpo;
}

async function deleteExpo(id: number) {
    const deleteExpo = await deleteExpositionRepository(id);
    return deleteExpo;
}

const services = {
    insertExposition,
    getExpositions,
    updateExpo,
    deleteExpo
};

export default services;