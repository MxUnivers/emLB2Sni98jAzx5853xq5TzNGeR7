const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatureModel = require("../models/CandidatureModel");

const router = require("express").Router();


router.get("/get_candidatures",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  candidatures =  await CandidatureModel.find({});
        res.json({message:"Canditures récupérer", data:candidatures.reverse()})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
    }
});



module.exports = router;




// récuperer les canditures envoyéer à l'entreprise
router.get("/get_candidature/entreprise/:IdEntreprise",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  id =  req.params.IdEntreprise;

        const  candidatures =  await CandidatureModel.find({idEntreprise:id});
        res.json({message:"Canditures récupérer", data:candidatures.reverse()})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
        console.log(error);
    }
});





// recuprer les canditures envoyéer au candidat
router.get("/get_candidature/candidat/:IdCandidat",AuthorizationMiddleware, async(req,res)=>{
    try {
        const  id =  req.params.IdCandidat;
        const  candidatures =  await CandidatureModel.find({idCandidat:id});
        res.json({message:"Canditures récupérer", data:candidatures.reverse()})
    } catch (error) {
        res.status(500).send({message:"Impossible de recupérer les  candidatures"+error})
    }
    
});


module.exports = router;