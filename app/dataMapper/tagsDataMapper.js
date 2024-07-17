import client from "../database.js"

const dataMapper= {
     //méthode pour créer un tag 
     create: async(tagInfo) => {
        const {
            id,
            value,
        } = tagInfo; 

        const sql=  {
            text: 'INSERT INTO "Tags" (id, value) VALUES ($1, $2)',
            values: [
                id,
                value,
            ],
        };
        const result = await client.query(sql);
        return result.rows;
    }, 

     //méthode pour supprimer un tag 
     delete: async() => {
        const sql=  {
            text: 'DELETE FROM "Tags" WHERE "id" = $1',
            values: [1]
        } 
        const result = await client.query(sql);
        return result.rows;
    }, 
}

export default dataMapper;