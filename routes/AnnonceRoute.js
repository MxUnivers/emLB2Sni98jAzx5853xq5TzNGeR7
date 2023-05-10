const router = require("express").Router();
const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const AnnonceModel = require("../models/AnnonceModel");
const CandidatModel = require("../models/CandidatModel");



router.post("/", AuthorizationMiddleware, async (req, res) => {
    try {
        const nouvelleAnnonce = new AnnonceModel(req.body);
        await nouvelleAnnonce.save(); // Sauvegarde de l'annonce dans la base données
        res.json({ message: "Annonce créée avec succès", nouvelleAnnonce }); // Réponse avec un message de succès et les détails de l'annonce créée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'annonce" }); // Réponse avec un message d'erreur en cas d'échec de la création de l'annonce
    }
});







// Fonction pour modifier l'annonce 
router.put("/edit/:id", async (req, res) => {
    try {
        const  id  = req.params.id;
        // Récupération des données de l'annonce depuis le corps de la requête
        const annonceExist = await AnnonceModel.findById({ _id: id })
        if (!annonceExist) { // Si l'annonce n'existe pas, on renvoie une erreur
            return res.status(404).json({ message: "Annonce non trouvée" });
        }
        const annonce = await AnnonceModel.findByIdAndUpdate({ _id: id }, req.body, { new: true }); // Utilisation de l'option { new: true } pour renvoyer la version modifiée de l'annonce
        await annonce.save();
        await res.json({ message: "Annonce modifiée avec succès", annonce }); // Réponse avec un message de succès et les détails de l'annonce modifiée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la modification de l'annonce" }); // Réponse avec un message d'erreur en cas d'échec de la modification de l'annonce
    }
});





// Fonction pour reucupéere les Annonces
router.get('/get_annonces',AuthorizationMiddleware, async (req, res) => {
    try {
      const annonces = await AnnonceModel.find({});
      await res.json({ data: annonces.reverse() });
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  });

// Fonction pour récupérer L'annonce
router.get('/get_annonce/:id',AuthorizationMiddleware, async (req, res) => {
    try {
        const annonceId =  req.params.id
      const annonces = await AnnonceModel.findById({_id:annonceId});
      await res.json({ data: annonces });
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  });
  
  











// fonction pour ajouter un canddidat à une annonce
router.patch('/get/:id/candidat/:candidatId', async (req, res) => {
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
router.patch('/get/:id/retirer-candidat/:candidatId', async (req, res) => {
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
router.put("/blocked/:id", async (req, res) => {
    try {
        const  id  =  req.params.id
        const annonce = await AnnonceModel.findByIdAndUpdate({_id:id});
        if (!annonce) {
            return res.status(404).json({ message: "Annonce introuvable" });
        }
        annonce.blocked =  true;
        await annonce.save();
        res.json({ message: "Annonce bloquée avec succès", annonce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors du blocage de l'annonce" });
    }
}
);




// Fonction pour Débloquer une annonce
router.put("/unblocked/:id", async (req, res) => {
    try {
        const  id  = req.params.id;
        const annonce = await AnnonceModel.findByIdAndUpdate({_id:id});
        if (!annonce) {
            return res.status(404).json({ message: "Annonce introuvable" });
        }
        annonce.blocked = false;
        await annonce.save();
        res.json({ message: "Annonce bloquée avec succès", annonce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors du blocage de l'annonce" });
    }
}
);




module.exports = router;