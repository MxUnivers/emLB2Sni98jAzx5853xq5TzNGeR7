const { response } = require('express');
const { AuthorizationMiddleware } = require('../middlewares/Authtoken');
const CandidatModel = require('../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const OffreEmploi = require('../models/OffreEmploiModel');
const AnnonceModel = require('../models/AnnonceModel');
const CandidatureModel = require('../models/CandidatureModel');
const { error } = require('firebase-functions/logger');

// Fonction pour créer un candidat
router.post("/", AuthorizationMiddleware, async (req, res) => {

  // Vérifier si l'email existe déjà dans la base de données
  try {
    const { email, password } = req.body;
    // Vérifier si l'email existe déjà
    const candidatExist = await CandidatModel.findOne({ email });
    if (candidatExist) {
      return res.status(400).json({ message: 'Un administrateur avec cet e-mail existe déjà' });
    }
    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    // Créer un nouvel administrateur
    const newCandidat = new CandidatModel(req.body);
    newCandidat.password = hashedPassword;
    await newCandidat.save();
    // Renvoyer une réponse JSON
    res.json({ message: 'Un nouvel administrateur a été créé avec succès' });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse avec le message d'erreur correspondant
    return res.status(500).json({ message: error.message });
  }
});



// Fonction pour modifier une candidat
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    delete updates.password;

    const result = await CandidatModel.findOneAndUpdate({ _id: id }, updates);
    if (!result) {
      return res.status(404).json({ message: "Candidat mon trouvé" });
    }
    await result.save();
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});


//Fonction pour modifier le met de passe du membre
router.put("/password/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const password = req.body.password;
    const candidat = await CandidatModel.findById({ _id: id })
    if (!candidat) {
      res.json({ message: "Aucun candidat indisponible" })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    candidat.password = hashedPassword;
    await candidat.save();
    await res.json({ message: "Mot de passe modifier avec succès" })

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'administrateur' });
  }
})





// Fonction pour Bloquer un candidat
router.put('/blocked/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidat = await CandidatModel.findById({ _id: req.params.id });

    if (!candidat) {
      return res.status(404).json({ message: "Candidat introuvable" });
    }
    candidat.blocked = true;

    res.json({ message: "Candidat bloqué avec succès", candidat: candidat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors du blocage du candidat" });
  }
});





// Fonction pour débloquer un candidat
router.put('/unblocked/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidat = await CandidatModel.findByIdAndUpdate({ _id: req.params.id });

    if (!candidat) {
      return res.status(404).json({ message: "Candidat introuvable" });
    }
    candidat.blocked = false;

    res.json({ message: "Candidat bloqué avec succès", candidat: candidat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors du blocage du candidat" });
  }
});




// fonction pour reucupéere les candidats
router.get('/get_candidats', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidates = await CandidatModel.find();
    res.json({ data: candidates.reverse() });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// fonction pour reucupéere un candidat par son id
router.get('/get_candidat/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id
    const candidates = await CandidatModel.findById({ _id: id });
    res.json({ data: candidates });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// recupérer tou les offres des candidats
router.get('/get_candidat/:id/offres', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidatId = req.params.id;

    await CandidatModel.findById({ _id: candidatId })
      .populate('offresPostulees')
      .exec(async (err, candidat) => {
        if (err) {
          // Gérer l'erreur
        }
        if (candidat) {
          const offresPostulees = candidat.offresPostulees;
          await res.json({ data: offresPostulees })
          // Utiliser le tableau des offres postulées
        }
      });

  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});



// recupérer tou les annonces des candidat
router.get('/get_candidat/:id/annonces', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidatId = req.params.id;

    await CandidatModel.findById({ _id: candidatId })
      .populate('AnnoncesPostuless')
      .exec(async (err, candidat) => {
        if (err) {
          // Gérer l'erreur
        }
        if (candidat) {
          const annoncePostulees = candidat.AnnoncesPostuless;
          await res.json({ data: annoncePostulees })
          // Utiliser le tableau des offres postulées
        }
      });

  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});





// Route pour ajouter une offre à un candidat
router.post('/get_candidat/:candidatId/postuler/:offreId/offres', async (req, res) => {
  const offreId = req.params.offreId;
  const candidatId = req.params.candidatId;
  try {

    const candidatExit = await CandidatModel.findById({ _id: candidatId });
    const offre = await OffreEmploi.findOne({ _id: offreId });

    if (!candidatExit) {
      return res.status(406).json({ message: "Candidat non trouvé" });
    }

    if (!offre) {
      return res.status(407).json({ message: "Offre non trouvée" });
    }
    if (offre.candidatPostulees.find(candidat => candidat._id.toString() === candidatId)) {
      return res.status(409).json({ message: "Le candidat a déjà postulé à cette offre" });
    }
    const candidat = await CandidatModel.findOneAndUpdate({ _id: candidatId }, { $push: { offresPostulees: offre } }, { new: true });
    const offrePostule = await OffreEmploi.findOneAndUpdate({ _id: offreId }, { $push: { candidatPostulees: candidat } }, { new: true });


    await candidat.save();
    await offrePostule.save();
    await res.json({ data: candidat });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Une erreur est suvenue" });
  }
});






// Pour ajouter un candidat une annonce
router.post('/get_candidat/:candidatId/postuler/:offreId/annonces', async (req, res) => {
  const offreId = req.params.offreId;
  const candidatId = req.params.candidatId;
  try {

    const candidatExit = await CandidatModel.findById({ _id: candidatId });
    const offre = await AnnonceModel.findOne({ _id: offreId });

    if (!candidatExit) {
      return res.status(406).json({ message: "Candidat non trouvé" });
    }
    if (!offre) {
      return res.status(407).json({ message: "Ann once non trouvée" });
    }
    if (offre.candidats.find(candidat => candidat._id.toString() === candidatId)) {
      return res.status(409).json({ message: "Le candidat a déjà postulé à cette Annonce" });
    }
    if (candidatExit.AnnoncesPostuless.find(candidat => candidat._id.toString() === candidatId)) {
      return res.status(410).json({ message: "Cette offre existe déja chez vous " });
    }


    // Ajouter une nouvelle canditure à l'annonce 
    const candidature = new CandidatureModel({
      idAnnonce: offre._id,
      idCandidat: candidatId,
      titre: offre.titre,
      idEntreprise:offre.idEntreprise
    });
    const candidat = await CandidatModel.findOneAndUpdate({ _id: candidatId }, { $push: { AnnoncesPostuless: offre } }, { new: true });
    const offrePostule = await AnnonceModel.findOneAndUpdate({ _id: offreId }, { $push: { candidats: candidat } }, { new: true });

    
    await candidature.save();
    await candidat.save();
    await offrePostule.save();
    await res.json({ data: candidat, message: "Candidature posté" });

  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Une erreur est suvenue" + err });
    console.log(err);
  }
});








module.exports = router;
