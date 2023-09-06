const EntrepriseModel = require("../../models/EntrepriseModel");
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { AuthorizationMiddleware } = require('../../middlewares/Authtoken');
dotenv.config();



router.post('/login/', AuthorizationMiddleware, async (req, res) => {
  try {
    // Vérifier si le candidat existe dans la base de données
    const {email} =  req.body;
    const candidat = await EntrepriseModel.findOne({ email });
    if (!candidat) {
      return res.status(402).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
    }
    // verifier si le compte à été bloquer
    if (candidat.access == false) {
      return res.status(410).json({ message: 'Imposible de se connecter par ce que votre compte à eté bloquer' });
    }
    // Vérifier si le mot de passe est correct
    const isValidPassword = await bcrypt.compare(req.body.password, candidat.password);
    if (!isValidPassword) {
      return res.status(409).json({ message: 'mot de passe incorrect' });
    }


    // Générer un token JWT pour la session de connexion
    const token = jwt.sign({ id: candidat._id }, process.env.JWT_SECRET);
    candidat.token = token;
    candidat.is_active = true;
    await candidat.save();
    // Envoyer une réponse avec le token JWT
    return res.status(200).json({ token: token, data: candidat, message: "Entreprise Connecté" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
  }
});



router.post('/disconnect/:id/', AuthorizationMiddleware, async (req, res) => {
  try {
    const entrepriseId = req.params.id;
    const entrepriseExist = await EntrepriseModel.findOne({ _id: entrepriseId });
    if (!entrepriseExist) {
      return res.status(409).json({ message: "Deconnexion Impossible de se decconecter" })
    }
    entrepriseExist.token = "";
    entrepriseExist.is_active = false
    await entrepriseExist.save();
    return res.status(200).json({ message: "Déconnecter " });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
  }
});





module.exports = router;