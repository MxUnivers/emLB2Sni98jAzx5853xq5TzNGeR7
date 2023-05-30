const CandidatModel = require("../models/CandidatModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const MessageModel = require("../models/MessageModel");

const router = require("express").Router();


// recupérer tout les messages des candidats
router.get('/get_message/candidat/:idCandidat/messages', async (req, res) => {
    try {
        const id = req.params.idCandidat;
        const candidatExist = await CandidatModel.findById({ _id: id });
        if (!candidatExist) {
            await res.status(406).json({ message: "le candidat introuvable" })
        }
        const messages = await MessageModel.find({ idCandidat: id });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});

// recupérer tout les messages des candidats
router.get('/get_message/entreprise/:idEntreprise/messages', async (req, res) => {
    try {
        const id = req.params.idEntreprise;
        const entrepriseExist = await EntrepriseModel.findById({ idEntreprise: id });
        if (!entrepriseExist) {
            await res.status(406).json({ message: "le employeur introuvable ! " })
        }
        const messages = await MessageModel.find({ idRecipient: id });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});





// recuprer  les message des boites
router.get('/get_messages', async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});

// Créer un nouveau message
router.post('/', async (req, res) => {
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
router.post('/post-message/:idSend/to/:idRecepter', async (req, res) => {
    try {
        const  idSend = req.params.idSend
        const { content } = req.body;
        const newMessage = new Message({ content });
        const savedMessage = await newMessage.save();
        res.json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du message' });
    }
});

// Mettre à jour un message existant
router.put('/edit/:id', async (req, res) => {
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
router.delete('/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du message' });
    }
});

// Débloquer un message 
router.delete('/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du message' });
    }
});



module.exports = router;