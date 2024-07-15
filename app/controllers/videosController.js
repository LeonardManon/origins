import dataMapper from "../dataMapper.js"

const videosController = {
	getAllVideos: async (req, res) => {
		try {
			// recup depuis bdd
			const allVideos = await dataMapper.videos();
			res.send({ data: allVideos })
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	getOneVideo: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	changeOneVideo: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	deleteOneVideo: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	addTagInVideo: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	deleteTagFromVideo: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
}


export default videosController;