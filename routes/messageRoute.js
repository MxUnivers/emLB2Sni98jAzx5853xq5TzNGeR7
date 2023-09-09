const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const MessageModel = require("../models/MessageModel");

const router = require("express").Router();


// poster un message 
router.get('/send/:idSender/receip/:idRecep', AuthorizationMiddleware, async (req, res) => {
    try {
        
        const idSend = req.params.idSender;
        const idRecep = req.params.idRecep;
        const message = await MessageModel(req.body);
        message.idSender=idSend;
        message.idRecipient=idRecep;

        await message.save();
        return res.status(200).json({data: message, message:"Message envoyé"});
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});




// recupérer tout les messages des candidats
router.get('/get_message/candidat/:idCandidat/messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.idCandidat;
        const candidatExist = await CandidatModel.findById({ _id: id });
        if (!candidatExist) {
            await res.status(406).json({ message: " candidat introuvable ! " });
        }
        const messages = await MessageModel.find({ idRecipient: id });
        res.json({data: messages, message:"Message du candidats recupérer"});
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});



// recupérer tout les messages des candidats
router.get('/get_message/entreprise/:idEntreprise/messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.idEntreprise;
        const entrepriseExist = await EntrepriseModel.findById({ idEntreprise: id });
        if (!entrepriseExist) {
            await res.status(406).json({ message: "le employeur introuvable ! " })
        }
        const messages = await MessageModel.find({ idSender: id });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});





// recuprer  les message des boites
router.get('/get_messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});




// Créer un nouveau message
router.post('/', AuthorizationMiddleware, async (req, res) => {
    try {
        const { content } = req.body;
        const newMessage = new Message({ content });
        const savedMessage = await newMessage.save();
        res.json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du message' });
    }
});




// Un entreprise écrit à un candidat
router.post('/entreprise-post/:idSend/to/:idReceip', AuthorizationMiddleware, async (req, res) => {
    try {
        const idSend = req.params.idSend;
        const idReceip = req.params.idReceip;
        const entrepriseExist = await EntrepriseModel.findById({ _id: idSend });
        const candidatExist = await CandidatModel.findById({ _id: idReceip });
        if (!entrepriseExist) {
             res.status(406).json({ message: "Employeur Introuvable" });
        }
        if (!candidatExist) {
             res.status(407).json({ message: "Candidat introuvable" });
        }
        const newMessage = new MessageModel({
            idSender: idSend,
            sender: entrepriseExist.full_name,
            recipient: candidatExist.firstname + " " + candidatExist.lastname,
            idRecipient: idReceip
        }, req.body);
        
        newMessage.save();
        res.json({data:newMessage,message :"Message envoyée"});
;
    } catch (error) {
        res.status(500).json({ error: 'Message non envoyée' });
        console.log(error);
    }
});





// Mettre à jour un message existant
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const updatedMessage = await MessageModel.findByIdAndUpdate(id, { content }, { new: true });
        res.json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du message' });
    }
});




// Supprimer un message 
router.delete('/messages/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du message' });
    }
});





// Débloquer un message 
router.delete('/messages/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du message' });
    }
});



module.exports = router;