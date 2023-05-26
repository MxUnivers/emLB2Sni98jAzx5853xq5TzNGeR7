

const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const OffreEmploiModel = require("../models/OffreEmploiModel");
const Envoyer_Notification = require("../utils/NotificationSend");
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();



const accountSid = process.env.accoussID_Twillio;
const authToken = process.env.tokenID_Twillio;

const client = require("twilio")(accountSid, authToken);


// Ajouter une offre d'emplois
router.post('/', AuthorizationMiddleware, async (req, res) => {
    try {
        const nouvelleOffre = new OffreEmploiModel(req.body);
        client.messages
            .create({
                subject: "Plateforme d'emplois",
                body:
                    `une nouvelle offre vient d'être posté : 
                    ${nouvelleOffre.titre} ,
                    lieu : ${nouvelleOffre.lieu} ,
                    email : ${nouvelleOffre.email}
                    
                    * connecter vous a votre espace maintent en cliquant ici 🙏
                    https://plenitude-ci.com/ .
                    `,
                from: "+12545365609", to: "+2250748641040"
            })
            .then(message => console.log(message.sid));
        const offre = await nouvelleOffre.save();
        await Envoyer_Notification(nouvelleOffre.titre, nouvelleOffre.description, nouvelleOffre.dateDebut)
        res.json({ message: 'Offre d\'emploi créée avec succès', offre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'offre d\'emploi' });
    }
});






// Fontion pour modifier une offre d'emplois
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const offreExist = await OffreEmploiModel.findById({ _id: id });
        if (!offreExist) {
            return await res.json({ message: "Offre indisponible" });
        }
        const offre = await OffreEmploiModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        await offre.save();
        res.json({ message: 'Offre d\'emploi mise à jour avec succès', offre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'offre d\'emploi' });
    }
});





// Fontion Recupérer la liste de l'offre d'emplois
router.get('/get_offres', AuthorizationMiddleware, async (req, res) => {
    try {
        const offre = await OffreEmploiModel.find({});
        res.json({ data: offre.reverse() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'offre d\'emploi' });
    }
});


// Fontion Recupérer la liste de l'offre d'emplois
router.get('/get_offre/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const offreId = req.params.id;
        const offre = await OffreEmploiModel.findById({ _id: offreId });
        res.json({ data: offre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'offre d\'emploi' });
    }
});






// Fonction pour ajouter un candidats à une offre d'emplois
router.post("/:offreId/candidats", AuthorizationMiddleware, async (req, res) => {
    try {
        const { nom, email, cv } = req.body;
        const candidat = new CandidatModel({
            nom,
            email,
            cv
        });
        const offre = await OffreEmploiModel.findOneAndUpdate(
            { _id: req.params.offreId },
            { $push: { candidats: candidat } },
            { new: true }
        );
        res.json({ message: "Candidat ajouté avec succès à l'offre", offre });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "Une erreur s'est produite lors de l'ajout du candidat" });
    }
});






// Fonction pour bloquer une offre d'emplois
router.put('/blocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const offreEmploiExist = await OffreEmploiModel.findById({ _id: id });
        if (!offreEmploiExist) {
            res.json({ message: "Offre d'emplois indisponnible" });
        }
        const offreEmploi = await OffreEmploiModel.findById({ _id: id });
        offreEmploi.blocked = true;
        res.json({ message: "Offre d'emplois Bloquer", offreEmploi });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'offre d\'emploi' });
    }
});






// Fonction pour Débloquer une offre d'emplois
router.put('/unblocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const offreEmploiExist = await OffreEmploiModel.findById({ _id: id });
        if (!offreEmploiExist) {
            res.json({ message: "Offre d'emplois indisponnible" });
        }
        const offreEmploi = await OffreEmploiModel.findById({ _id: id });
        offreEmploi.blocked = false;
        res.json({ message: "Offre d'emplois Débloquer ", offreEmploi });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'offre d\'emploi' });
    }
});




module.exports = router;



