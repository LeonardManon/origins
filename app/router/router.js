import { Router } from "express";
import videosRouter from "./videosRouter.js";
import tagsRouter  from "./tagsRouter.js";

// Main API router
const router = Router();

// les routes 
router.use("/videos", videosRouter);
router.use("/tags", tagsRouter);

export default router;