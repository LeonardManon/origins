import client from "../database.js";

const dataMapper= {

    // méthode pour récupérer tout les tags et vidéos associés
    getTagVideo: async(tagId, videoId) => {
        const sql=  {
            text: `SELECT * FROM "M2M_TagsVideos" WHERE "tag_id" = $1 AND "video_id" = $2 `,
            values: [tagId, videoId],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour ajouter un tag d'une vidéo
    addTagVideo: async(tagId, videoId) => {
        const sql=  {
            text: `INSERT INTO "M2M_TagsVideos" ("tag_id","video_id") VALUES ($1, $2) `,
            values: [tagId, videoId],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour supprimer un tag d'une vidéo
    deleteTagVideo: async(tagId,videoId) => {
        const sql=  {
            text: `DELETE FROM "M2M_TagsVideos" WHERE "tag_id" = $1 AND "video_id" = $2 `,
            values: [tagId, videoId],
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

};

export default dataMapper;
