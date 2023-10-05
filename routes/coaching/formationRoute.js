

const { AuthorizationMiddleware } = require("../../middlewares/Authtoken");
const CandidatModel = require("../../models/CandidatModel");
const EntrepriseModel = require("../../models/EntrepriseModel");
const { FormationModel } = require("../../models/coaching&formation/FormationModel");
const Envoyer_Notification = require("../../utils/NotificationSend");
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();



const accountSid = process.env.accoussID_Twillio;
const authToken = process.env.tokenID_Twillio;

const client = require("twilio")(accountSid, authToken);


// Ajouter une Formation d'emplois
router.post('/post/:idEntreprise', AuthorizationMiddleware, async (req, res) => {
    try {
        const IdRecruteur = req.params.idEntreprise;
        const nouvelleFormation = new FormationModel(req.body);
        nouvelleFormation.idEntreprise = IdRecruteur;

        // client.messages
        //     .create({
        //         subject: "Plateforme d'emplois",
        //         body:
        //             `une nouvelle Formation vient d'être posté : 
        //             ${nouvelleFormation.titre} ,
        //             lieu : ${nouvelleFormation.lieu} ,
        //             email : ${nouvelleFormation.email}

        //             * connecter vous a votre espace maintent en cliquant ici 🙏
        //             https://plenitude-ci.com/ .
        //             `,
        //         from: "+12545365609", to: "+2250748641040"
        //     })
        //     .then(message => console.log(message.sid));
        //await Envoyer_Notification(nouvelleFormation.titre, nouvelleFormation.description, nouvelleFormation.dateDebut)


        const Formation = await nouvelleFormation.save();

        return res.status(200).json({ message: 'Formation créée avec succès', Formation });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'Formation ' + error });
    }
});






// Fontion pour modifier une Formation d'emplois
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const FormationExist = await FormationModel.findById({ _id: id });
        if (!FormationExist) {
            return res.status(402).json({ message: "Formation indisponible" });
        }
        const Formation = await FormationModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        await Formation.save();
        return res.status(200).json({ message: 'Formation  mise à jour avec succès', data: Formation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Formation ' });
    }
});





// Fontion Recupérer la liste de l'Formation d'emplois
router.get('/get_formations', AuthorizationMiddleware, async (req, res) => {
    try {
        const Formation = await FormationModel.find({});
        res.json({ data: Formation.reverse() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Formation ' });
    }
});

// Fontion Recupérer la liste de d'entreprise
router.get('/get_formations/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const idEntreprise = req.params.id
        const Formation = await FormationModel.find({ idEntreprise: idEntreprise });
        return res.status(200).json({ data: Formation.reverse() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Formation ' });
    }
});


// Fontion Recupérer la liste de l'Formation d'emplois
router.get('/get_formation/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const FormationId = req.params.id;
        const Formation = await FormationModel.findById({ _id: FormationId });
        if (!Formation) {
            return res.status(402).json({ message: "Formation not found" });
        }
        const entrepriseExist = await EntrepriseModel.findById({ _id: Formation.idEntreprise });
        if (!entrepriseExist) {
            return res.status(406).json({ message: "Entreprise not found" });
        }
        return res.status(200).json({ data: Formation, entreprise: entrepriseExist, message: "Formation recupérer avce succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Formation ' });
    }
});











// Fonction pour bloquer une Formation d'emplois
router.put('/blocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const FormationEmploiExist = await FormationModel.findById({ _id: id });
        if (!FormationEmploiExist) {
            res.json({ message: "Formation d'emplois indisponnible" });
        }
        const FormationEmploi = await FormationModel.findById({ _id: id });
        FormationEmploi.blocked = true;
        res.json({ message: "Formation d'emplois Bloquer", FormationEmploi });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'Formation ' });
    }
});






// Fonction pour Débloquer une Formation d'emplois
router.put('/unblocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const FormationEmploiExist = await FormationModel.findById({ _id: id });
        if (!FormationEmploiExist) {
            res.json({ message: "Formation d'emplois indisponnible" });
        }
        const FormationEmploi = await FormationModel.findById({ _id: id });
        FormationEmploi.blocked = false;
        res.json({ message: "Formation d'emplois Débloquer ", FormationEmploi });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'Formation ' });
    }
});






// Inscrire un un candidat à un formation à un groupe 
router.put("/add_candidat/:idCandidat/Formation/:idFormation", async (req, res) => {
    try {

        const IdFormation = req.params.idFormation;
        const IdCandidat = req.params.idCandidat;

        // verfifer que le memre existe
        const candidatExist = await CandidatModel.findById({ _id: IdCandidat });
        if (!candidatExist) {
            return res.status(407).json({ message: "Candidat introubable ! " });
        };

        const FormationExist = await FormationModel.findById({ _id: IdFormation });
        if (!FormationExist) {
            return res.status(408).json({ message: "Cette Formation est introuvable" });
        }


        if (FormationExist.candidats.find(objet => objet._id.toString() === IdCandidat)) {
            return res.status(409).json({ message: "Cet adhérent existe déja dans la fpormation !" });
        }

        //const newAdherent = new AdherentModel(memberExist);
        FormationExist.candidats.push(candidatExist);
        candidatExist.Formations.push(FormationExist);
        FormationExist.save();
        candidatExist.save();


        return res.status(200).json({ message: "Candidat viens de postuler a cette Formation !", data: FormationExist });

    } catch (err) {
        res.status(505).json({ message: "Erreur lors de l'ajout du membre au groupe" + err });
    }
});








module.exports = router;



