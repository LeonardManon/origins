import { Router } from "express";
import videosController from "../controllers/videosController.js"

const router = Router();

//Route pour récupérer les vidéos
router.get("/", videosController.getAllVideos)

//Route pour récupérer une video 
router.get("/:videoId", videosController.getOneVideo)

//Route pour créer une vidéo
router.post("/", videosController.createOneVideo)

//Route pour modifier une vidéo
router.patch("/:videoId", videosController.updateOneVideo)

//Route pour supprimer une vidéo 
router.delete("/:videoId", videosController.deleteOneVideo)

//Route pour ajouter un tag à une vidéo
router.put("/:videoId/tag/:tagId", videosController.addTagInVideo)

//Route pour supprimer un tag à une vidéo
router.delete("/:videoId/tag/:tagId", videosController.deleteTagVideo)

export default router;