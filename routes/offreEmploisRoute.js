const CandidatModel = require("../models/CandidatModel");
const OffreEmploiModel = require("../models/OffreEmploiModel")
const router = require("express").Router();






// Ajouter une offre d'emplois
router.post('/', async (req, res) => {
    try {
        const { titre, entreprise, description, lieu, dateDebut, dateFin, salaire } = req.body;

        const nouvelleOffre = new OffreEmploiModel({
            titre,
            entreprise,
            description,
            lieu,
            dateDebut,
            dateFin,
            salaire,
            candidats: []
        });

        const offre = await nouvelleOffre.save();
        res.json({ message: 'Offre d\'emploi créée avec succès', offre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'offre d\'emploi' });
    }
});




// Fontion pour modifier une offre d'emplois
router.put('/:id', async (req, res) => {
    try {
        const { titre, entreprise, description, lieu, dateDebut, dateFin, salaire } = req.body;
        const offre = await OffreEmploi.findByIdAndUpdate(req.params.id, {
            titre,
            entreprise,
            description,
            lieu,
            dateDebut,
            dateFin,
            salaire
        }, { new: true });

        res.json({ message: 'Offre d\'emploi mise à jour avec succès', offre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'offre d\'emploi' });
    }
});







// Fonction pour ajouter un candidats à une offre d'emplois
router.post("/:offreId/candidats", async (req, res) => {
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
router.delete('/:id', async (req, res) => {
    try {
      await OffreEmploiModel.findByIdAndDelete(req.params.id);
      res.json({ message: 'Offre d\'emploi supprimée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'offre d\'emploi' });
    }
  });
  