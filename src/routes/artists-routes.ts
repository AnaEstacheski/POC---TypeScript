import { Router } from "express";
import { insertArtist } from "../controllers/artist-controller.js";
import { artistSchema } from "../schemas/artists.js";
import { schemaValidation } from "../middlewares/schema-validation.js";

const artistsRoutes = Router();

artistsRoutes.post("/", schemaValidation(artistSchema), insertArtist);

export default artistsRoutes;