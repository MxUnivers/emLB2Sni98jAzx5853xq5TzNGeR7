
const { AuthorizationMiddleware } = require('../middlewares/Authtoken');
const CandidatModel = require('../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/emailSender');



function generateRandomPassword(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}


// Fonction pour créer un candidat
router.post("/", AuthorizationMiddleware, async (req, res) => {
  try {
    const { username, email } = req.body;
    // Vérifier si l'email existe déjà
    const candidatExist = await CandidatModel.findOne({ email, username });
    if (candidatExist) {
      return res.status(400).json({ message: 'Cet candidat existe déja ! ' });
    }
    // Hacher le mot de passe
    const passwordRandom = generateRandomPassword(10);
    const hashedPassword = await bcrypt.hash(passwordRandom, 10);

    // Créer un nouvel administrateur
    const newCandidat = new CandidatModel(req.body);
    newCandidat.password = hashedPassword;

    newCandidat.is_active = false;
    await newCandidat.save();
    sendEmail(
      "aymarbly559@gmail.com",
      "a g c t x y x c o x s k v a g k",
      `${newCandidat.email}`,
      "Bienevenue sur Jouman",
      `Votre mot de passe  : ${passwordRandom}`
    );
    return res.status(200).json({ message: 'Inscription du candidat réussi ,  votre mot de passe vous été envoyer par email' });

  } catch (error) {
    console.log(error);
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
    return res.status(200).json({ message: "Modification reussi ", data: result });
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
      return res.json({ message: "Aucun candidat indisponible" })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    candidat.password = hashedPassword;
    await candidat.save();
    return res.status(200).json({ message: "Mot de passe modifier avec succès" })

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
    candidat.access = false;

    return res.status(200).json({ message: "Candidat bloqué avec succès", candidat: candidat });
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
    candidat.access = true;

    return res.status(200).json({ message: "Candidat bloqué avec succès", candidat: candidat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors du blocage du candidat" });
  }
});




// fonction pour reucupéere les candidats
router.get('/get_candidats', AuthorizationMiddleware, async (req, res) => {
  try {
    const candidates = await CandidatModel.find({ access: true });
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
    const candidat = await CandidatModel.findById({ _id: id });
    res.json({ data: candidat });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
