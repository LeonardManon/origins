import dataMapper from "../dataMapper/tagsDataMapper.js"

const tagsController = {
	createTag: async (req, res) => {
		try {
			const tag = await dataMapper.create(req.params.id);
			res.send({data: tag})
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