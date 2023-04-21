const CandidatModel = require('../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');

// Fonction pour créer un candidat
router.post("/", async (req, res) => {

    // Vérifier si l'email existe déjà dans la base de données
    const existingCandidat = await CandidateModel.findOne({ email });
    if (existingCandidat) {
        return res.status(409).json({ message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // Créer un nouveau candidat
    const newCandidat = new CandidatModel(req.body, { password: hashedPassword });

    try {
        // Enregistrer le nouveau candidat dans la base de données
        await newCandidat.save();
        // Envoyer une réponse réussie avec les informations du candidat créé
        return res.status(201).json({ candidat: newCandidat });
    } catch (error) {
        // En cas d'erreur, renvoyer une réponse avec le message d'erreur correspondant
        return res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const result = await CandidateModel.findOneAndUpdate({ _id: id }, updates);
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
  

// Fonction pour Bloquer un candidat
router.put('/:id/blocked', async (req, res) => {
    try {
      const candidat = await CandidateModel.findByIdAndUpdate(req.params.id, { blocked: true });
  
      if (!candidat) {
        return res.status(404).json({ message: "Candidat introuvable" });
      }
  
      res.json({ message: "Candidat bloqué avec succès", candidat: candidat });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors du blocage du candidat" });
    }
  });


// Fonction pour débloquer un candidat
router.put('/:id/unbloked', async (req, res) => {
    try {
      const candidat = await CandidateModel.findByIdAndUpdate(req.params.id, { blocked: false });
  
      if (!candidat) {
        return res.status(404).json({ message: "Candidat introuvable" });
      }
  
      res.json({ message: "Candidat bloqué avec succès", candidat: candidat });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors du blocage du candidat" });
    }
  });
  


  
// fonction pour reucupéere les candidats
router.get('/get_all', async (req, res) => {
    try {
      const candidates = await CandidatModel.find();
      res.json({data:candidates});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});




module.exports = router;
