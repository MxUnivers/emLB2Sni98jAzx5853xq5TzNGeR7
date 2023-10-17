const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const CandidatureModel = require("../models/CandidatureModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const MessageModel = require("../models/MessageModel");
const sendEmail = require("../utils/emailSender");
const { envoyerSMS } = require("../utils/sms");

const router = require("express").Router();


// poster un message 
router.post('/send/:idSender/receip/:idReceip', AuthorizationMiddleware, async (req, res) => {
    try {

        const idSend = req.params.idSender;
        const idRecep = req.params.idReceip;
        const message = await MessageModel(req.body);
        message.idSender = idSend;
        message.idRecipient = idRecep;


        const candidatExist =  await CandidatModel.findById({_id:idRecep});
        if(!candidatExist){
            return res.status(408).json({message:"Candidate non trouvé"})
        }

        // await message.save();

        const candidatureExist = await CandidatureModel.findOne({ idCandidat: idRecep });
        if (!candidatureExist) {
            return res.status(409).json({ message: "Candidature non trouvé" });
        }

        const accountSid = 'AC0ac2e1c72b9b25dcdae2e346f59326c2';
        const authToken = 'aa3657a62060817b4765df4372758656';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: `${message.content}`,
                from: '+12564483104',
                to: `+${candidatureExist.telephone}`
            })
            .then(message => console.log(message.sid))
            .catch(error => {
                console.error(error);
            });

            

            sendEmail(
                "aymarbly559@gmail.com",
                "a g c t x y x c o x s k v a g k",
                `${newCandidat.email}`,
                `Candidature  '${message.subject}'`,
                `
                <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                <div class="header" style="text-align: center;">
                    <img class="logo" src="https://urielle-group-job.com/assets/images/logo-dark.png"
                     style="max-width: 100px; height: auto;">
                </div>
                <div class="subject" style="font-size: 24px; margin-top: 20px;">
                    ${message.subject}
                </div>
                <div class="message" style="margin-top: 20px;">
                    <p>${message.content}</p>
                </div>
                <a class="button" href="https://urielle-group-job.com/" target="_blank" style="display: block; width: 100%; padding: 10px; background-color: #007BFF; color: #fff; text-align: center; text-decoration: none; border-radius: 5px; margin-top: 20px;">redirection</a>
            </div>
                `
              );




        return res.status(200).json({ data: message, message: "Message envoyé" });
    } catch (error) {
        return res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
    }
});




// recupérer tout les messages des candidats
router.get('/get_message/candidat/:idCandidat/messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.idCandidat;
        const candidatExist = await CandidatModel.findById({ _id: id }); // Utilisez simplement id ici
        if (!candidatExist) {
            return res.status(406).json({ message: "Candidat introuvable !" }); // Utilisez return pour arrêter l'exécution ici
        }
        const messages = await MessageModel.find({ idRecipient: id });
        res.status(200).json({ data: messages, message: "Messages du candidat récupérés" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des messages " + error.message }); // Utilisez error.message pour obtenir le message d'erreur précis
    }
});




// recupérer tout les messages des candidats
router.get('/get_message/entreprise/:idEntreprise/messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.idEntreprise;
        const entrepriseExist = await EntrepriseModel.findById({ _id: id });
        if (!entrepriseExist) {
            return res.status(407).json({ message: "le employeur introuvable ! " })
        }
        const messages = await MessageModel.find({ idSender: id });
        return res.status(200).json({ message: "Message de l'entreprise recupérer", data: messages });
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des messages' });
    }
});





// recuprer  les message des boites
router.get('/get_messages', AuthorizationMiddleware, async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des messages' });
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
        res.status(500).json({ message: 'Erreur lors de la création du message' });
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
        res.json({ data: newMessage, message: "Message envoyée" });
        ;
    } catch (error) {
        res.status(500).json({ message: 'Message non envoyée' });
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
        res.status(500).json({ message: 'Erreur lors de la mise à jour du message' });
    }
});




// Supprimer un message 
router.delete('/messages/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du message' });
    }
});





// Débloquer un message 
router.delete('/messages/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        await MessageModel.findByIdAndDelete(id);
        res.json({ message: 'Message supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du message' });
    }
});



module.exports = router;