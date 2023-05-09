

const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const NotificationModel = require("../models/NotificationModel")
const router = require("express").Router();



// routes pour poster les notifications



// Ajouter une notication d'emplois
router.post('/',AuthorizationMiddleware, async (req, res) => {
    try {
        const nouvellenotication = new NotificationModel(req.body);

        const notication = await nouvellenotication.save();
        res.json({ message: 'notication d\'emploi créée avec succès', notication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'notication d\'emploi' });
    }
});






// Fontion pour modifier une notication d'emplois
router.put('/edit/:id',AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const offreExist = await NotificationModel.findById({ _id: id });
        if (!offreExist) {
            return await res.json({ message: "notication indisponible" });
        }
        const notication = await NotificationModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        await notication.save();
        res.json({ message: 'notication d\'emploi mise à jour avec succès', notication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'notication d\'emploi' });
    }
});





// Fontion Recupérer la liste de l'notication d'emplois
router.get('/get_notications',AuthorizationMiddleware, async (req, res) => {
    try {
        const notications = await NotificationModel.find({});
         res.json({data:notications.reverse()});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'notication d\'emploi' });
    }
});


// Fontion Recupérer la liste de l'notication d'emplois
router.get('/get_notication/:id',AuthorizationMiddleware, async (req, res) => {
    try {
        const offreId =  req.params.id;
        const notication = await NotificationModel.findById({_id:offreId});
         res.json({data:notication});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'notication d\'emploi' });
    }
});












module.exports =  router;



