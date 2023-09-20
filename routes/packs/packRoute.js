


const router = require("express").Router();
const { AuthorizationMiddleware } = require("../../middlewares/Authtoken");
const CandidatModel = require("../../models/CandidatModel");
const EntrepriseModel = require("../../models/EntrepriseModel");
const { PackCandidatModel, PackEntrepriseModel } = require("../../models/PackModel");



router.post("/candidat/:idCandidat/subscribe/:idPack", AuthorizationMiddleware, async (req, res) => {
    try {
        const idCandidat = req.params.idCandidat;
        const idPack = req.params.idPack;

        const candidatExit = await CandidatModel.findById({ _id: idCandidat });
        if (!candidatExit) {
            return res.status(401).json({ message: "Ce candidat n'existe pas" });
        }
        const packExist = await PackCandidatModel.findById({ _id: idPack });
        if (!packExist) {
            return res.status(402).json({ message: "Cet pack n'existe" })
        }


        // get all pack
        const packsCandidat = await PackCandidatModel.find({});

        const packFind = packsCandidat.find((pack) => pack._id === idPack);


        // calcule de la date 
        // Obtenez la date actuelle en millisecondes
        const dateNow = Date.now();
        // Définissez le nombre de millisecondes dans une année
        const unAnEnMillisecondes = 365 * 24 * 60 * 60 * 1000;
        // Ajoutez un an en millisecondes à la date actuelle
        const dateEnd = dateNow + unAnEnMillisecondes;
        // Créez des objets Date à partir des valeurs en millisecondes
        const dateActuelle = new Date(dateNow);
        const datePlusUnAn = new Date(dateEnd);


        // assignation des données
        candidatExit.account.pack = packFind.title;
        candidatExit.account.solde = packFind.solde;
        candidatExit.account.dateNow = dateActuelle;
        candidatExit.account.dateEnd = datePlusUnAn;
        candidatExit.account.count_sms = packExist.sms_count;

        console.log(datePlusUnAn);


        // sauveagrder de données
        await candidatExit.save();

        res.status(200).json({data:candidatExit, message :"Pack Souscris"})

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})





// packEntreprise
router.post("/recruteur/:idRecruteur/subscribe/:idPack", AuthorizationMiddleware, async (req, res) => {
    try {
        const idRecruteur = req.params.idRecruteur;
        const idPack = req.params.idPack;

        const recrutertExit = await EntrepriseModel.findById({ _id: idRecruteur });
        if (!recrutertExit) {
            return res.status(401).json({ message: "Ce candidat n'existe pas" });
        }
        const packExist = await PackEntrepriseModel.findById({ _id: idPack });
        if (!packExist) {
            return res.status(402).json({ message: "Cet pack n'existe" })
        }


        // get all pack
        const packsCandidat = await PackEntrepriseModel.find({});

        const packFind = packsCandidat.find((pack) => pack._id === idPack);


        // calcule de la date 
        // Obtenez la date actuelle en millisecondes
        const dateNow = Date.now();
        // Définissez le nombre de millisecondes dans une année
        const unAnEnMillisecondes = 365 * 24 * 60 * 60 * 1000;
        // Ajoutez un an en millisecondes à la date actuelle
        const dateEnd = dateNow + unAnEnMillisecondes;
        // Créez des objets Date à partir des valeurs en millisecondes
        const dateActuelle = new Date(dateNow);
        const datePlusUnAn = new Date(dateEnd);


        // assignation des données
        recrutertExit.account.pack = packFind.title;
        recrutertExit.account.solde = packFind.solde;
        recrutertExit.account.dateNow = dateActuelle;
        recrutertExit.account.dateEnd = datePlusUnAn;
        recrutertExit.account.count_sms = packExist.sms_count;

        console.log(datePlusUnAn);


        // sauveagrder de données
        await recrutertExit.save();

        res.status(200).json({data:recrutertExit, message :"Pack Souscris"})

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})




// packEntreprise
router.post("/entreprises", AuthorizationMiddleware, async (req, res) => {
    try {
        
        const packsCandidat = await PackEntrepriseModel.find({});
        res.status(200).json({data:packsCandidat, message :"Pack candidat recupérer"})

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})

// candiday
router.post("/entreprises", AuthorizationMiddleware, async (req, res) => {
    try {
        
        const packsCandidat = await PackCandidatModel.find({});
        res.status(200).json({data:packsCandidat, message :"Pack candidat recupérer"})

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})







module.exports =  router;