const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatureModel = require("../models/CandidatureModel");

const router = require("express").Router();


// Poster une candidature
router.put("/post/:idCandidat/idEntreprise/:idReruter/offre/:idOffre", AuthorizationMiddleware, async (req, res) => {
    try {
        const IdCandidat =  req.params.idCandidat;
        const idRecruteur =  req.params.idReruter;
        const IdOffre =  req.params.idOffre;

        const candidature = new CandidatureModel(req.body);
        candidature.idCandidat;
        candidature.idEntreprise;
        candidature.idOffre;

        await candidature.save();
        return res.status(200).json({ message: "Candidature Modifier avec succès ", data: candidature })
    } catch (error) {
        res.status(500).send({ message : "Impossible d'accpeter la candidature avec succès" + error })
    }
});



// Modifier une candidature


router.put("/edit/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidatureExit = await CandidatureModel.findById({ _id : id });
        if(!candidatureExit){
            res.json({message:" Candidature non trouvé ! "});
        }
        const candidature = await CandidatureModel.findByIdAndUpdate({ _id : id },req.body);
        await candidature.save();
        res.json({ message: "Candidature Modifier avec succès ", data: candidature })
    } catch (error) {
        res.status(500).send({ message : "Impossible d'accpeter la candidature avec succès" + error })
    }
});








router.get("/get_candidatures", AuthorizationMiddleware, async (req, res) => {
    try {
        const candidatures = await CandidatureModel.find({});
        res.json({ message: "Canditures récupérer", data: candidatures.reverse() })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
    }
});




router.get("/get_candidature/:IdCandidautre", AuthorizationMiddleware, async (req, res) => {
    try {
        const  id = req.params.IdCandidautre;
        const candidatures = await CandidatureModel.findById({_id:id});
        res.json({ message: "Candidature récupérer", data: candidatures })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer la candidature" + error })
    }
});







// récuperer les canditures envoyéer à l'entreprise
router.get("/get_candidature/entreprise/:IdEntreprise", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.IdEntreprise;

        const candidatures = await CandidatureModel.find({ idEntreprise: id });
        res.json({ message: "Canditures récupérer", data: candidatures.reverse() })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
        console.log(error);
    }
});





// recuprer les canditures envoyéer au candidat
router.get("/get_candidature/candidat/:IdCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.IdCandidat;
        const candidatures = await CandidatureModel.find({ idCandidat: id });
        res.json({ message: "Canditures récupérer", data: candidatures.reverse() })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
    }
});







// Accepeter la candidature d'un candidat 
router.post("/authorized/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidature = await CandidatureModel.findById({ _id : id });
        if(!candidature){
            res.json({message:" Candidature non trouvé ! "});
        }
        if(candidature.status == "Acceptée"){
            res.json({message:"Cette Candidature à été déja prise en compte"});
        }
        candidature.status = "Acceptée"
        await candidature.save();
        res.json({ message: "Candidature accépter ", data: candidature })
    } catch (error) {
        res.status(500).send({ message : "Impossible d'accpeter la candidature avec succès" + error })
    }
});





// Rejetté la candidature d'un candidat 
router.post("/unauthorized/entreprise/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidature = await CandidatureModel.findById({ _id : id });
        if(!candidature){
            res.json({message:" Candidature non trouvé ! "});
        }
        if(candidature.status == "Refusée"){
            res.json({message:"Cette Candidature à été déja refusée ! "})
        }
        candidature.status = "Refusée";
        candidature.save();
        res.json({ message: "Candidature accépter ", data: candidature })
    } catch (error) {
        res.status(500).send({ message : "Impossible de recupérer les  candidatures" + error })
    }
});





module.exports = router;