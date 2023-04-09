import { Router } from "express";
import { insertArtWork } from "../controllers/artworks-controller.js";
import { artWorkSchema } from "../schemas/artworks.js";
import { schemaValidation } from "../middlewares/schema-validation.js";

const artworksRoutes = Router();

artworksRoutes.post("/", schemaValidation(artWorkSchema), insertArtWork);

export default artworksRoutes;