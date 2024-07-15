import client from "./database.js"

const dataMapper= {
    videos: async() => {
        const sql = `SELECT * FROM "Videos" `;
        const result = await client.query(sql);
        return result.rows;
    }, 

    tags: async() => {
        const sql = `SELECT * FROM "Tags" `;
        const result = await client.query(sql);
        return result.rows;
    }, 
}

export default dataMapper;