import { Router } from "express";
import { insertExposition, getExposition, updateExposition, deleteExposition } from "../controllers/exposition-controller.js";
import { expositionSchema } from "../schemas/exposition.js";
import { schemaValidation } from "../middlewares/schema-validation.js";

const expositionsRoutes = Router();

expositionsRoutes.get("/", getExposition);
expositionsRoutes.post("/add-exposition", schemaValidation(expositionSchema), insertExposition);
expositionsRoutes.put("/update-exposition/:id", schemaValidation(expositionSchema), updateExposition);
expositionsRoutes.delete("/remove-exposition/:id", deleteExposition);

export default expositionsRoutes;