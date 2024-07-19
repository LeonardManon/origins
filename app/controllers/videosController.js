import dataMapper from "../dataMapper/videosDataMapper.js"
import videoTagDataMapper from "../dataMapper/videoTagDataMapper.js"
import tagsDataMapper from "../dataMapper/tagsDataMapper.js"

const videosController = {
	getAllVideos: async (req, res) => {
		try {
			// recup depuis bdd
			const allVideos = await dataMapper.getAll();
			res.send({ data: allVideos })
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	getOneVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			const video = await dataMapper.getOne(videoId);
			
			if (video.length === 0) {
				return res.status(404).send({ message: 'video not found' })
			}
			return res.send({data: video});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},

	createOneVideo: async (req, res) => {
		try {
			const newVideo = await dataMapper.create(req.body);
			res.send({data: newVideo})
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},

	updateOneVideo: async (req, res) => {
		try {
			//récupérer l’id de la ressource que je compte modifier dans le controller dédié
			const videoId = Number(req.params.videoId);
			const videoToUpdate = req.body;
			// récupérer en bdd la ressource avec son id pour vérifier qu’elle existe
			const video = await dataMapper.getOne(videoId);
			//si elle n’existe pas
			// renvoyer une erreur 404 (fin de l’algo)
			if (video.length === 0){
				return res.status(404).send({ message: 'video not found' })
			}
			// si elle existe
			// récuperer la data reçu dans le body à modifier
			// faire un update en bdd de la data sur l’entrée en bdd qui correspond à l’id de la ressource
			await dataMapper.update(videoId, videoToUpdate)
			return res.send()
			// renvoyer une 200 (fin de l’algo)
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	
	deleteOneVideo: async (req, res) => {
		try {
			const videoId = Number(req.params.videoId);
			await dataMapper.delete(videoId);
			return res.status(200).send()
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	addTagInVideo: async (req, res) => {
		try {
			console.log(`[{req.params}]:`, req.params);
			const videoId = Number(req.params.videoId);
			const tagId = Number(req.params.tagId);
			
			const video = await dataMapper.getOne(videoId);
			if (video.length === 0){
				return res.status(404).send({ message: 'video not found' })
			}

			const tag = await tagsDataMapper.getOneTag(tagId);
			if (tag.length === 0){
				return res.status(404).send({ message: 'tag not found' })
			}

			const tagInVideo = await videoTagDataMapper.getOne(tagId, videoId)
			console.log(`[{tagInVideo}]:`, tagInVideo);
			if (tagInVideo.length > 0) {
				return res.status(200).send();
			}
			
			await videoTagDataMapper.addTagVideo(videoId, tagId)
			return res.send()
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	deleteTagVideo: async (req, res) => {
		console.log(`[{req.params}]:`, req.params);
		try {
			const tagId= Number(req.params.tagId);
			const videoId = Number(req.params.videoId);
			await videoTagDataMapper.deleteTagVideo(tagId,videoId);
			return res.status(200).send()
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
}


export default videosController;