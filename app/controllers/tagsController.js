import dataMapper from "../dataMapper.js"

const tagsController = {
	createTag: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	deleteTag: (req, res) => {
		try {
			return res.status(501).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
};

export default tagsController;