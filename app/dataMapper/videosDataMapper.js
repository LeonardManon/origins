import client from "../database.js"

const dataMapper= {
    //méthode pour récupérer toutes les vidéos
    getAll: async() => {
        const sql = 'SELECT * FROM "Videos"';
        const result = await client.query(sql);
        return result.rows;
    }, 
    //méthode pour récupérer une seule vidéo
    getOne: async(videoId) => {
        
        const sql=  {
            text: `SELECT * FROM "Videos" WHERE "id" = ${videoId}`,
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
    //méthode pour créer une vidéo 
    create: async(video) => {
        const { name,  description,  url } = video; 
        const sql=  {
            text: `INSERT INTO "Videos" (name, description, url) VALUES ($1, $2, $3)`,
            values: [name, description, url],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour modifier une vidéo 
    update: async (video) => {
        const {name, description, url, id} = video; 
        const sql = {
            text: `UPDATE "Videos" SET "name" =$1, "description" = $2, "url" = $3 WHERE "id"= $4 RETURNING name, description, url, id `,
            values: [name, description, url, id],
        };
        ;
        const result = await client.query(sql);
        return result.rows
    }, 
   
     //méthode pour supprimer une vidéo 
     delete: async(videoId) => {
        const sql=  {
            text: `DELETE FROM "Videos" WHERE "id" = ${videoId}`,
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour ajouter un tag à une vidéo
    addTagInVideo: async(tagVideo) => {
        console.log("tagVideo", tagVideo)
        const { video_id, tag_id } = tagVideo; 
        const sql= {
            text: `UPDATE "M2M_TagsVideos" SET "video_id" =$1, "tag_id" =$2 WHERE "id" = $3 RETURNING video_id, tag_id`,
            values: [video_id, tag_id],
        };
        console.log(`[{sql}]:`, sql);
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour supprimer un tag à une vidéo
    deleteTagInVideo: async(tagId) => {
        const sql=  {
            text: `DELETE FROM "M2M_TagsVideos" WHERE "tag_id" = ${tagId} RETURNING *`,
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

};


export default dataMapper;