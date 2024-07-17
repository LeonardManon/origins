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
			const video = await dataMapper.update(req.params.id);
			res.send({data: video})
			return res.status(501).send({});
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
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
}


export default videosController;