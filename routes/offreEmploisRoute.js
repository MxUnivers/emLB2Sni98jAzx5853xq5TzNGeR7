

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
router.post('/post/:idEntreprise', AuthorizationMiddleware, async (req, res) => {
    try {
        const IdRecruteur  =  req.params.idEntreprise;
        const nouvelleOffre = new OffreEmploiModel(req.body);
        nouvelleOffre.idEntreprise = IdRecruteur;

        // client.messages
        //     .create({
        //         subject: "Plateforme d'emplois",
        //         body:
        //             `une nouvelle offre vient d'être posté : 
        //             ${nouvelleOffre.titre} ,
        //             lieu : ${nouvelleOffre.lieu} ,
        //             email : ${nouvelleOffre.email}
                    
        //             * connecter vous a votre espace maintent en cliquant ici 🙏
        //             https://plenitude-ci.com/ .
        //             `,
        //         from: "+12545365609", to: "+2250748641040"
        //     })
        //     .then(message => console.log(message.sid));
        //await Envoyer_Notification(nouvelleOffre.titre, nouvelleOffre.description, nouvelleOffre.dateDebut)


        const offre = await nouvelleOffre.save();
        
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

// Fontion Recupérer la liste de d'entreprise
router.get('/get_offres/id', AuthorizationMiddleware, async (req, res) => {
    try {
        const  idEntreprise =  req.params.id
        const offre = await OffreEmploiModel.find({idEntreprise:idEntreprise});
        return res.status(200).json({ data: offre.reverse() });
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






// ajout un membre à un groupe 
router.put("/add_candidat/:idCandidat/offre/:idOffre", async (req, res) => {
    try {
        
        const IdOffre = req.params.idOffre;
        const IdCandidat = req.params.idCandidat;

        // verfifer que le memre existe
        const candidatExist = await CandidatModel.findById({ _id: IdCandidat });
        if (!candidatExist) {
            return res.status(407).json({ message: "Candidat introubable ! " });
        };

        const offreExist = await OffreEmploiModel.findById({ _id: IdOffre });
        if (!offreExist) {
            return res.status(408).json({ message: "Cette Offre est introuvable" });
        }


        if (offreExist.candidats.find(objet => objet._id.toString() === IdCandidat)) {
            return res.status(409).json({ message: "Cet adhérent existe déja dans le groupe !" });
        }

        //const newAdherent = new AdherentModel(memberExist);
        offreExist.candidats.push(candidatExist);
        candidatExist.offres.push(offreExist);
        offreExist.save();
        candidatExist.save();

        
        return  res.status(200).json({ message: "Candidat viens de postuler a cette offre !", data: offreExist });

    } catch (err) {
        res.status(505).json({ message: "Erreur lors de l'ajout du membre au groupe" + err });
    }
});








module.exports = router;



