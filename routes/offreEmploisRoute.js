const CandidatModel = require("../models/CandidatModel");
const OffreEmploiModel = require("../models/OffreEmploiModel")
const router = require("express").Router();


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
