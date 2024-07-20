import { Router } from "express";
import videosRouter from "./videosRouter.js";
import tagsRouter  from "./tagsRouter.js";

// API router
const router = Router();

// Les routes 
router.use("/videos", videosRouter);
router.use("/tags", tagsRouter);

export default router;