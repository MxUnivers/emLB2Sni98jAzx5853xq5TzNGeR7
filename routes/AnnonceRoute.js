const router = require("express").Router();
const AnnonceModel = require("../models/AnnonceModel");
const CandidatModel = require("../models/CandidatModel");



router.post("/", async (req, res) => {
    try {
        const { titre, entreprise, description, lieu, dateDebut, dateFin, salaire } = req.body; // Récupération des données de l'annonce depuis le corps de la requête

        const nouvelleAnnonce = new AnnonceModel({ // Création d'une nouvelle instance du modèle Annonce avec les données récupérées
            titre,
            entreprise,
            description,
            lieu,
            dateDebut,
            dateFin,
            salaire,
            candidats: [] // Initialisation de la liste des candidats à vide
        });

        const annonce = await nouvelleAnnonce.save(); // Sauvegarde de l'annonce dans la base de données

        res.json({ message: "Annonce créée avec succès", annonce }); // Réponse avec un message de succès et les détails de l'annonce créée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'annonce" }); // Réponse avec un message d'erreur en cas d'échec de la création de l'annonce
    }
});







// Fonction pour modifier l'annonce 
router.post("/:id", async (req, res) => {
    try {
        const { titre, entreprise, description, lieu, dateDebut, dateFin, salaire } = req.body; // Récupération des données de l'annonce depuis le corps de la requête

        const annonce = await AnnonceModel.findByIdAndUpdate(req.params.id, { // Recherche de l'annonce à modifier en utilisant son ID et mise à jour des données
            titre,
            entreprise,
            description,
            lieu,
            dateDebut,
            dateFin,
            salaire
        }, { new: true }); // Utilisation de l'option { new: true } pour renvoyer la version modifiée de l'annonce

        if (!annonce) { // Si l'annonce n'existe pas, on renvoie une erreur
            return res.status(404).json({ message: "Annonce non trouvée" });
        }

        res.json({ message: "Annonce modifiée avec succès", annonce }); // Réponse avec un message de succès et les détails de l'annonce modifiée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la modification de l'annonce" }); // Réponse avec un message d'erreur en cas d'échec de la modification de l'annonce
    }
});






// Fonction pour récuprer les informations sur l'annonce par son Id
router.get("/:id", async (req, res) => {
    try {
        const annonce = await AnnonceModel.findById({ _id: req.params.id });
        res.json(
            {
                message: "Annonce récupérer", data: annonce
            }
        )
    } catch (error) {
        res.status(404).json({ message: error })
    }
})






// fonction pour ajouter un canddidat à une annonce
router.post('/:id/candidat/:candidatId', async (req, res) => {
    const { id, candidatId } = req.params;

    try {
        const annonce = await AnnonceModel.findById(id);
        const candidat = await CandidatModel.findById(candidatId);

        if (!annonce) {
            return res.status(404).json({ message: "Annonce non trouvée" });
        }

        if (!candidat) {
            return res.status(404).json({ message: "Candidat non trouvé" });
        }

        annonce.candidats.push(candidatId);
        await annonce.save();

        res.json({ message: "Candidat ajouté à l'annonce avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue lors de l'ajout du candidat à l'annonce" });
    }
});




// Supprimer un candidat d'une annonce
router.patch('/annonce/:id/retirer-candidat/:candidatId', async (req, res) => {
    try {
        const annonceId = req.params.id;
        const candidatId = req.params.candidatId;

        // Retrouver l'annonce correspondante
        const annonce = await Annonce.findById(annonceId);
        if (!annonce) {
            return res.status(404).json({ message: 'Annonce non trouvée' });
        }

        // Retirer le candidat de la liste des candidats de l'annonce
        annonce.candidats = annonce.candidats.filter(id => id != candidatId);

        // Enregistrer les modifications
        await annonce.save();

        res.json({ message: 'Le candidat a été retiré de l\'annonce' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});




// Fonction pour bloquer une annonce
router.put("/:id/blocked", async (req, res) => {
    try {
        const annonce = await AnnonceModel.findByIdAndUpdate(req.params.id, { blocked: true });
        if (!annonce) {
            return res.status(404).json({ message: "Annonce introuvable" });
        }
        await annonce.save();
        res.json({ message: "Annonce bloquée avec succès", annonce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors du blocage de l'annonce" });
    }
}
);




// Fonction pour Débloquer une annonce
router.put("/:id/unblocked", async (req, res) => {
    try {
        const annonce = await AnnonceModel.findByIdAndUpdate(req.params.id, { blocked: false });
        if (!annonce) {
            return res.status(404).json({ message: "Annonce introuvable" });
        }
        await annonce.save();
        res.json({ message: "Annonce bloquée avec succès", annonce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors du blocage de l'annonce" });
    }
}
);




module.exports = router;