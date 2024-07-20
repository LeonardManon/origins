# origins

Le but de ce test est de réaliser une API permettant de se connecter à une base de données postgres.

 Le modèle de données sera le suivant : 

 - Une table Videos 
    * id (clé primaire obligatoire) 
    * nom (obligatoire) 
    * description
    * url (obligatoire) 
    * createdAt 
    * updatedAt 
    
- Une table Tags 
    * id (clé primaire obligatoire) 
    * valeur (obligatoire, unique) 
    
Une vidéo pourra avoir plusieurs tags associés et un tag pourra être associé à plusieurs vidéos. 

L'API devra exposer les services suivants :
 - CRUD complet sur le modèle Video 
 - Création / suppression de tags
 - Ajout / suppression de tags à une vidéo
