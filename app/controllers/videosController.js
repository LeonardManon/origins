import dataMapper from "../dataMapper/videosDataMapper.js";
import videoTagDataMapper from "../dataMapper/videoTagDataMapper.js";
import tagsDataMapper from "../dataMapper/tagsDataMapper.js";

const videosController = {
	// Méthode qui permet d'aller récupérer toutes les vidéos 
	getAllVideos: async (req, res, next) => {
		try {
			const allVideos = await dataMapper.getAll();
			return res.status(200).send({ data: allVideos });
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	// Méthode qui permet de récupérer une video 
	getVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			const video = await dataMapper.getVideo(videoId);
			if (video.length === 0) {
				return res.status(404).send({ message: "video not found" });
			}
			return res.status(200).send({data: video});
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	//Méthode qui permet de créer une vidéo
	createVideo: async (req, res) => {
		try {
			const newVideo = await dataMapper.createVideo(req.body);
			return res.status(200).send({data: newVideo});
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	// Méthode qui permet de modifié une vidéo
	updateVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			const videoUpdate = req.body;
			const video = await dataMapper.getVideo(videoId);
			if (video.length === 0){
				return res.status(404).send({ message: "video not found"});
			}
			await dataMapper.updateVideo(videoId, videoUpdate);
			return res.status(200).send({ message: "ok" });
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	//Méthode qui permet de supprimer une vidéo
	deleteVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			await dataMapper.deleteVideo(videoId);
			return res.status(200).send({ message: "ok"})
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`)
		};
	},
    // Méthode pour ajouter un tag à une vidéo
	addTagVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			const tagId = Number(req.params.tagId);
			const video = await dataMapper.getVideo(videoId);
			if (video.length === 0){
				return res.status(404).send({ message: "video not found" });
			}
			const tag = await tagsDataMapper.getTag(tagId);
			if (tag.length === 0){
				return res.status(404).send({ message: "tag not found" });
			}
			const tagVideo = await videoTagDataMapper.getTagVideo(tagId, videoId);
			if (tagVideo.length > 0) {
				return res.status(200).send({ message: "ok" });
			}
			await videoTagDataMapper.addTagVideo(videoId, tagId);
			return res.status(200).send({ message: "ok" });
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	// Méthode qui permet de supprimer un tag d'une vidéo
	deleteTagVideo: async (req, res) => {
		try {
			const tagId= Number(req.params.tagId);
			const videoId = Number(req.params.videoId);
			await videoTagDataMapper.deleteTagVideo(tagId,videoId);
			return res.status(200).send({ message: "ok" });
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
};

export default videosController;