import client from "../database.js";

const dataMapper= {
    // méthode pour aller chercher un tag 
    getTag: async(tagId) => {
        const sql=  {
            text: `SELECT * FROM "Tags" WHERE "id" = $1`,
            values: [tagId],
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
    //méthode pour créer un tag 
     createTag: async(tag) => {
        const { value } = tag; 
        const sql=  {
            text: `INSERT INTO "Tags" (value) VALUES ($1)`,
            values: [value],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 
     //méthode pour supprimer un tag 
     deleteTag: async(tagId) => {
        const sql=  {
            text: `DELETE FROM "Tags" WHERE "id" = $1`,
            values: [tagId],
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
}

export default dataMapper;