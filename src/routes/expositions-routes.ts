import { Router } from "express";
import { expositionSchema } from "../schemas/exposition.js";
import { schemaValidation } from "../middlewares/schema-validation.js";

const expositionsRoutes = Router();

expositionsRoutes.get("/");
expositionsRoutes.post("/add-exposition", schemaValidation(expositionSchema));
expositionsRoutes.put("/update-exposition/:id", schemaValidation(expositionSchema));
expositionsRoutes.delete("/remove-exposition/:id");

export default expositionsRoutes;