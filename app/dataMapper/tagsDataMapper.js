import client from "../database.js"

const dataMapper= {

    getOneTag: async(tagId) => {
        const sql=  {
            text: `SELECT * FROM "Tags" WHERE "id" = $1`,
            values: [tagId],
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
    //méthode pour créer un tag 
     create: async(tag) => {
        const { value } = tag; 
        const sql=  {
            text: `INSERT INTO "Tags" (value) VALUES ($1)`,
            values: [value],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

     //méthode pour supprimer un tag 
     delete: async(tagId) => {
        const sql=  {
            text: `DELETE FROM "Tags" WHERE "id" = ${tagId}`,
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
}

export default dataMapper;