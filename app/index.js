import router from "./router/router.js";
import express from "express";

// création de l'application 
export const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// mise en place du routeur 
app.use(router);

//Démarrage du serveur
const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`API démarée à l'adresse : htpp://localhost:${port}`);