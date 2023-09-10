const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const CandidatureModel = require("../models/CandidatureModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const OffreEmploiModel = require("../models/OffreEmploiModel");


const router = require("express").Router();


// Poster une candidature
router.post("/add/:idC/entreprise/:idE/offre/:idOffre", AuthorizationMiddleware, async (req, res) => {
    try {
        const idCandidat = req.params.idC;
        const idRecruteur = req.params.idE;
        const idOffre = req.params.idOffre;

        // Vérification de l'existence du candidat
        const candidatExist = await CandidatModel.findById(idCandidat);
        if (!candidatExist) {
            return res.status(407).json({ message: "Candidat introuvable !" });
        }
        console.log("Candidat Trouvé");

        // Vérification de l'existence de l'entreprise (recruteur)
        const entrepriseExist = await EntrepriseModel.findById(idRecruteur);
        if (!entrepriseExist) {
            return res.status(408).json({ message: "Recruteur introuvable !" });
        }
        console.log("Recruteur Trouvé");

        // Vérification de l'existence de l'offre
        const offreExist = await OffreEmploiModel.findById(idOffre);
        if (!offreExist) {
            return res.status(409).json({ message: "Cette Offre est introuvable" });
        }
        console.log("Offre Trouvé");

        // Vérification si le candidat existe déjà dans l'offre
        if (offreExist.candidats.some(candidat => candidat.toString() === idCandidat)) {
            return res.status(410).json({ message: "Ce candidat existe déjà dans l'offre !" });
        }
        console.log("Offre non trouvé chez le candidat");

        // Création de la candidature avec les bonnes références
        const candidature = new CandidatureModel(req.body);
        candidature.idCandidat=idCandidat;
        candidature.idEntreprise=idRecruteur;
        candidature.idOffre = idOffre;
        candidature.title=offreExist.title;
        candidature.coverPicture= offreExist.coverPicture;
        // Mise à jour des relations dans les modèles
        offreExist.candidats.push(idCandidat);
        await offreExist.save();
        
        candidatExist.offres.push(idOffre);
        await candidatExist.save();

        // Sauvegarde des modifications du candidat
        await candidature.save();
        console.log("Sauvegarde terminée");

        return res.status(200).json({ message: "Candidature postée pour l'offre", data: candidature });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Impossible d'accepter la candidature" });
    }
});


// Modifier une candidature


router.put("/edit/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidatureExit = await CandidatureModel.findById({ _id: id });
        if (!candidatureExit) {
            res.json({ message: " Candidature non trouvé ! " });
        }
        const candidature = await CandidatureModel.findByIdAndUpdate({ _id: id }, req.body);
        await candidature.save();
        res.json({ message: "Candidature Modifier avec succès ", data: candidature })
    } catch (error) {
        res.status(500).send({ message: "Impossible d'accpeter la candidature avec succès" + error })
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

// candidature
router.get("/get_candidature/:id", AuthorizationMiddleware, async (req, res) => {
    try {
        const idCandidature = req.params.id;
        const candidature = await CandidatureModel.findById({ _id: idCandidature });
        return res.status(200).json({ message: "Canditures récupérer", data: candidature })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
    }
});




router.get("/get_candidature/:IdCandidautre", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.IdCandidautre;
        const candidatures = await CandidatureModel.findById({ _id: id });
        res.json({ message: "Candidature récupérer", data: candidatures })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer la candidature" + error })
    }
});







// récuperer les canditures envoyéer à l'entreprise
router.get("/get_candidatures/entreprise/:IdEntreprise", AuthorizationMiddleware, async (req, res) => {
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
router.get("/get_candidatures/candidat/:IdCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.IdCandidat;
        const candidatures = await CandidatureModel.find({ idCandidat: id });
        res.json({ message: "Canditures récupérer", data: candidatures.reverse() })
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
    }
});







// Accepter la candidature d'un candidat 
router.post("/authorized/entreprise/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidature = await CandidatureModel.findById({ _id: id });
        if (!candidature) {
            res.json({ message: " Candidature non trouvé ! " });
        }
        candidature.status = "VALIDATE";
        await candidature.save();
        res.json({ message: "Candidature accépter ", data: candidature })
    } catch (error) {
        res.status(500).send({ message: "Impossible d'accpeter la candidature avec succès" + error })
    }
});





// Rejetté la candidature d'un candidat 
router.post("/unauthorized/entreprise/:Idcandidature", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.Idcandidature;
        const candidature = await CandidatureModel.findById({ _id: id });
        if (!candidature) {
            res.json({ message: " Candidature non trouvé ! " });
        }
        candidature.status = "CANCEL";
        candidature.save();
        res.json({ message: "Candidature Réjété ", data: candidature });
    } catch (error) {
        res.status(500).send({ message: "Impossible de recupérer les  candidatures" + error })
    }
});





module.exports = router;