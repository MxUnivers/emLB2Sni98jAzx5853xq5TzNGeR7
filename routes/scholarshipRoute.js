

const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const ScholarshipModel = require("../models/bourses/ScholarshipModel");
const Envoyer_Notification = require("../utils/NotificationSend");
const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();



const accountSid = process.env.accoussID_Twillio;
const authToken = process.env.tokenID_Twillio;

const client = require("twilio")(accountSid, authToken);


// Ajouter une Bourse d'etudes
router.post('/post/:idEntreprise', AuthorizationMiddleware, async (req, res) => {
    try {
        const IdRecruteur  =  req.params.idEntreprise;
        const nouvelleBourse = new ScholarshipModel(req.body);
        nouvelleBourse.idEntreprise = IdRecruteur;

        // client.messages
        //     .create({
        //         subject: "Plateforme d'etudes",
        //         body:
        //             `une nouvelle Bourse vient d'être posté : 
        //             ${nouvelleBourse.titre} ,
        //             lieu : ${nouvelleBourse.lieu} ,
        //             email : ${nouvelleBourse.email}
                    
        //             * connecter vous a votre espace maintent en cliquant ici 🙏
        //             https://plenitude-ci.com/ .
        //             `,
        //         from: "+12545365609", to: "+2250748641040"
        //     })
        //     .then(message => console.log(message.sid));
        //await Envoyer_Notification(nouvelleBourse.titre, nouvelleBourse.description, nouvelleBourse.dateDebut)


        const Bourse = await nouvelleBourse.save();
        
        return res.status(200).json({ message: 'Bourse d\'etude créée avec succès', Bourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'Bourse d\'etude' });
    }
});






// Fontion pour modifier une Bourse d'etudes
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const bourseExist = await ScholarshipModel.findById({ _id: id });
        if (!bourseExist) {
            return  res.status(402).json({ message: "Bourse indisponible" });
        }
        const bourse = await ScholarshipModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        await bourse.save();
        return res.status(200).json({ message: 'Bourse d\'etude mise à jour avec succès', data:bourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Bourse d\'etude' });
    }
});





// Fontion Recupérer la liste de l'Bourse d'etudes
router.get('/get_bourses', AuthorizationMiddleware, async (req, res) => {
    try {
        const bourse = await ScholarshipModel.find({access:true});
        res.json({ data: bourse.reverse() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Bourse d\'etude' });
    }
});

// Fontion Recupérer la liste de d'entreprise
router.get('/get_bourses/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const  idEntreprise =  req.params.id
        const bourse = await ScholarshipModel.find({idEntreprise:idEntreprise});
        return res.status(200).json({ data: bourse.reverse() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Bourse d\'etude' });
    }
});


// Fontion Recupérer la liste de l'Bourse d'etudes
router.get('/get_bourse/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const bourseId = req.params.id;
        const bourse = await ScholarshipModel.findById({ _id: bourseId });
        if(!bourse){
            return res.status(402).json({message:"Bourse not found"});
        }
        const entrepriseExist = await EntrepriseModel.findById({_id:bourse.idEntreprise});
        if(!entrepriseExist){
            return res.status(406).json({message:"Entreprise not found"});
        }
        return res.status(200).json({ data: bourse ,entreprise:entrepriseExist, message:"Bourse recupérer avce succès"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'Bourse d\'etude' });
    }
});











// Fonction pour bloquer une Bourse d'etudes
router.put('/blocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const bourseetudeExist = await ScholarshipModel.findById({ _id: id });
        if (!bourseetudeExist) {
            res.json({ message: "Bourse d'etudes indisponnible" });
        }
        const bourseetude = await ScholarshipModel.findById({ _id: id });
        bourseetude.blocked = true;
        res.json({ message: "Bourse d'etudes Bloquer", data:bourseetude });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'Bourse d\'etude' });
    }
});






// Fonction pour Débloquer une Bourse d'etudes
router.put('/unblocked/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const bourseetudeExist = await ScholarshipModel.findById({ _id: id });
        if (!bourseetudeExist) {
            res.json({ message: "Bourse d'etudes indisponnible" });
        }
        const bourseetude = await ScholarshipModel.findById({ _id: id });
        bourseetude.blocked = false;
        res.json({ message: "Bourse d'etudes Débloquer ", data:bourseetude });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'Bourse d\'etude' });
    }
});






// ajout un membre à un groupe 
router.put("/add_candidat/:idCandidat/Bourse/:idBourse", async (req, res) => {
    try {
        
        const IdBourse = req.params.idBourse;
        const IdCandidat = req.params.idCandidat;

        // verfifer que le memre existe
        const candidatExist = await CandidatModel.findById({ _id: IdCandidat });
        if (!candidatExist) {
            return res.status(407).json({ message: "Candidat introubable ! " });
        };

        const bourseExist = await ScholarshipModel.findById({ _id: IdBourse });
        if (!bourseExist) {
            return res.status(408).json({ message: "Cette Bourse est introuvable" });
        }


        if (bourseExist.candidats.find(objet => objet._id.toString() === IdCandidat)) {
            return res.status(409).json({ message: "Cet adhérent existe déja dans le groupe !" });
        }

        //const newAdherent = new AdherentModel(memberExist);
        bourseExist.candidats.push(candidatExist);
        candidatExist.bourses.push(bourseExist);
        bourseExist.save();
        candidatExist.save();

        
        return  res.status(200).json({ message: "Candidat viens de postuler a cette Bourse !", data: bourseExist });

    } catch (err) {
        res.status(505).json({ message: "Erreur lors de l'ajout du membre au groupe" + err });
    }
});








module.exports = router;



