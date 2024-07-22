import tagsDataMapper from "../dataMapper/tagsDataMapper.js";

const tagsController = {
	//Méthode qui permet de créer un tag
	createTag: async (req, res) => {
		try {
			const newTag = await tagsDataMapper.createTag(req.body);
			return res.status(200).send({data: newTag});
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
	// Méthode qui permet de supprimer un tag
	deleteTag: async (req, res) => {
		try {
			const tagId = Number(req.params.tagId);
			await tagsDataMapper.deleteTag(tagId);
			return res.status(200).send({ message: "ok" });
		} catch (error) {
			return res.status(500).send(`Erreur: ${error}`);
		};
	},
};

export default tagsController;