import { Router } from "express";
import tagsController from "../controllers/tagsController.js"

const router = Router();

// Route pour crée un tag 
router.post("/", tagsController.createTag)

// Route pour supprimer un tag
router.delete("/:tagId", tagsController.deleteTag)

export default router; 