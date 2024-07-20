import pg from "pg";
import "dotenv/config";

// Créer un client
const client = new pg.Client(process.env.PG_URL);

// Connecter le client
client.connect();

export default client;