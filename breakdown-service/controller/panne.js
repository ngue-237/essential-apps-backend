const { Panne } = require("../model/panne");
const client = require("../bd/connect");
const { ObjectId } = require("mongodb");

const ajouterPanne = async (req, res)=>{
    try {
        let panne = new Panne(req.body.nom, req.body.secteur, req.body.description, req.body.occurence);
        
        let result = await client.bd().collection("pannes").insertOne(panne);

        res.status(200).json(result);

    } catch (erreur) {
        console.log(erreur);
        res.status(500).json(erreur);
    }
};

const getAllPannes = async (req, res)=>{
    try {
        let cursor = client.bd().collection("pannes").find();
        let result = await cursor.toArray();
        if(result.length>0){
            res.status(200).json(result);
        }else{
            res.status(404).json({msg : "aucune panne trouvée"});
        }
    } catch (erreur) {
        console.log(erreur);
        res.status(500).json(erreur);
    }
};

const getPanne = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
        let cursor = client.bd().collection("pannes").find({_id : id});
        let result = await cursor.toArray();
        if(result.length>0){
            res.status(200).json(result[0]);
        }else{
            res.status(404).json({msg : "cette panne est introuvable"});
        }
    } catch (erreur) {
        console.log(erreur);
        res.status(500).json(erreur);
    }
};

const modifierPanne = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
        let newNom = req.body.nom;
        let newSecteur = req.body.secteur;
        let newDescription = req.body.description;
        let newOccurence = req.body.occurence;

        let result = await client.bd().collection("pannes").updateOne({_id : id}, {$set : {nom : newNom, secteur : newSecteur, description : newDescription, occurence : newOccurence}});
        if(result.modifiedCount==1){
            res.status(200).json({msg : "modification réussie"});
        }else{
            res.status(404).json({msg : "cette panne est introuvable"});
        }
        
    } catch (erreur) {
        console.log(erreur);
        res.status(500).json(erreur);
        
    }
};

const supprimerPanne = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
       

        let result = await client.bd().collection("pannes").deleteOne({_id : id});
        if(result.deletedCount==1){
            res.status(200).json({msg : "suppression réussie"});
        }else{
            res.status(404).json({msg : "cette panne est introuvable"});
        }
        
    } catch (erreur) {
        console.log(erreur);
        res.status(500).json(erreur);
        
    }
};

module.exports = { ajouterPanne, getAllPannes, getPanne, modifierPanne, supprimerPanne};