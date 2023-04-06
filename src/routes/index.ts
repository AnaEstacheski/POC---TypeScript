import { Request, Response, Router } from "express";
import expositionsRoutes from "./expositionsRoutes.js";
import artworksRoutes from "./artistsRoutes.js";
import artistsRoutes from "./artistsRoutes.js";

const routes = Router();

routes.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
})

routes.use("/artists", artistsRoutes);
routes.use("/artworks", artworksRoutes);
routes.use("/expositions", expositionsRoutes);

export default routes;