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
        console.log(`[{video}]:`, video);
        const { name,  description,  url } = video; 

        const sql=  {
            text: `INSERT INTO "Videos" (name, description, url) VALUES ($1, $2, $3)`,
            values: [name, description, url],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour modifier une vidéo 
    update: async(videoInfo) => {
        const {
            id,
            name, 
            description, 
            url,
            created_at, 
            updated_at
        } = videoInfo; 

        const sql=  {
            text: 'UPDATE "Videos" SET name = $1, description = $2, url = $3, created_at = $4, updated = $5 WHERE id = $1',
            values: [
                id,
                name, 
                description, 
                url,
                created_at, 
                updated_at
            ]
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

     //méthode pour supprimer une vidéo 
     delete: async(videoId) => {
        const sql=  {
            text: `DELETE FROM "Videos" WHERE "id" = ${videoId}`,

        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour ajouter un tag à une vidéo
    addTagInVideo: async() => {
        const sql=  {
            text: 'SELECT "id" FROM "Videos" INNER JOIN "Tags" ON video.id = tag.video_id ',
            values: [1]
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

    //méthode pour ajouter un tag à une vidéo
    deleteTagInVideo: async() => {
        const sql=  {
            text: 'SELECT "id" FROM "Videos" INNER JOIN "M2M_TagsVideos" INNER JOIN "Tags" ON video.id = tag.video_id ',
            values: [1]
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 

};

export default dataMapper;