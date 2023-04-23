const { AuthorizationMiddleware } = require('../middlewares/Authtoken');
const CandidatModel = require('../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');

// Fonction pour créer un candidat
router.post("/",AuthorizationMiddleware, async (req, res) => {

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
router.put('/edit/:id',AuthorizationMiddleware, async (req, res) => {
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





// Fonction pour Bloquer un candidat
router.put('/:id/blocked',AuthorizationMiddleware, async (req, res) => {
  try {
    const candidat = await CandidatModel.findById({_id:req.params.id});

    if (!candidat) {
      return res.status(404).json({ message: "Candidat introuvable" });
    }
    candidat.blocked=true;

    res.json({ message: "Candidat bloqué avec succès", candidat: candidat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors du blocage du candidat" });
  }
});





// Fonction pour débloquer un candidat
router.put('/:id/unblocked',AuthorizationMiddleware, async (req, res) => {
  try {
    const candidat = await CandidatModel.findByIdAndUpdate({_id:req.params.id} );

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
router.get('/get_candidats',AuthorizationMiddleware, async (req, res) => {
  try {
    const candidates = await CandidatModel.find();
    res.json({ data: candidates });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});




module.exports = router;
