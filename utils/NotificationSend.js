const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const NotificationModel =  require("../models/NotificationModel");
const  appSend =  require("express").Router();

//Poster une nouvelle notification

//Fonction pour envoyer la notification
const  Envoyer_Notification = async({titre , description , date})=>{
    appSend.post('/',AuthorizationMiddleware, async (req, res) => {
        try {
            const nouvellenotication = new NotificationModel({
                titre:titre,description:description,dateDebut:date
            });
            const notication = await nouvellenotication.save();
            res.json({ message: 'notication d\'emploi créée avec succès', notication });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'notication d\'emploi' });
        }
    });
}

module.exports = Envoyer_Notification;