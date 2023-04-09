import { Exposition } from "../protocols";
import {
    insertExpositionRepository, getExpositionRepository,
    updateExpositionRepository, deleteExpositionRepository
}
    from "../repositories/expositions-repository.js";

async function insertExposition(exposition: Exposition) {
    const insertExpo = await insertExpositionRepository(exposition);
    return insertExpo;
}

async function getExpositions() {
    const expositions = await getExpositionRepository();
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