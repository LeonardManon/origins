import dataMapper from "../dataMapper/tagsDataMapper.js"

const tagsController = {
	createTag: async (req, res) => {
		try {
			const newTag = await dataMapper.create(req.body);
			res.send({data: newTag})
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
	
	deleteTag: async (req, res) => {
		try {
			const tagId = Number(req.params.tagId);
			await dataMapper.delete(tagId);
			return res.status(200).send({});
		} catch (error) {
			res.status(500).send(`Erreur: ${error}`)
			throw error;
		}
	},
};

export default tagsController;