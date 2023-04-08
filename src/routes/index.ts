import { Request, Response, Router } from "express";
import expositionsRoutes from "./expositions-routes.js";
import artworksRoutes from "./artworks-routes.js";
import artistsRoutes from "./artists-routes.js";

const routes = Router();

routes.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
})

routes.use("/artists", artistsRoutes);
routes.use("/artworks", artworksRoutes);
routes.use("/expositions", expositionsRoutes);

export default routes;