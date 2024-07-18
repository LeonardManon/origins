import dataMapper from "../dataMapper/videosDataMapper.js"

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
			// récupérer en bdd la ressource avec son id pour vérifier qu’elle existec
			const video = await dataMapper.getOne(videoId);
			//si elle n’existe pas
			// renvoyer une erreur 404 (fin de l’algo)
			if (video.length === 0){
				return res.status(404).send({ message: 'video not found' })
			}
			// si elle existe
			// récuperer la data reçu dans le body à modifier
			// faire un update en bdd de la data sur l’entrée en bdd qui correspond à l’id de la ressource
			await dataMapper.update(req.body)
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
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	deleteTagFromVideo: async (req, res) => {
		try {
			const tagId= Number(req.params.tagId);
			await dataMapper.delete(tagId);
			return res.status(200).send()
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
}


export default videosController;