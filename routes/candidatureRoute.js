const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatureModel = require("../models/CandidatureModel");

const router = require("express").Router();


router.get("/get_candiatures",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  candidatures =  await CandidatureModel.find({});
        res.json({message:"Canditures récupérer", candidatures})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
    }
});





// récuperer les canditures envoyéer à l'entreprise
router.get("/get_candiature/entreprise/:IdEntreprise",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  id =  req.params.IdEntreprise;

        const  candidatures =  await CandidatureModel.find({idEntreprise:id});
        res.json({message:"Canditures récupérer", candidatures})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
    }
});





// recuprer les canditures envoyéer au candidat
router.get("/get_candiature/candidat/:IdEntreprise",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  id =  req.params.IdEntreprise;
        const  candidatures =  await CandidatureModel.find({idEntreprise:id});
        res.json({message:"Canditures récupérer", candidatures})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
    }
    
});
