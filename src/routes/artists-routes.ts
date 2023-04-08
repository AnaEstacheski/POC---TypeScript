import { Router } from "express";
import { artistSchema } from "../schemas/artists.js";
import { schemaValidation } from "../middlewares/schema-validation.js";

const artistsRoutes = Router();

artistsRoutes.post("/", schemaValidation(artistSchema));

export default artistsRoutes;