

const CandidatModel = require('../../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const  dotenv =  require("dotenv");
const jwt=  require("jsonwebtoken");
const { AuthorizationMiddleware } = require('../../middlewares/Authtoken');
dotenv.config();





// Route pour la connexion d'un candidat
router.post('/login/',AuthorizationMiddleware, async (req, res) => {
    try {
      // Vérifier si le candidat existe dans la base de données
      const candidat = await CandidatModel.findOne({ email: req.body.email });
      if (!candidat) {
        return res.status(402).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
      }
      // verifier si le compte à été bloquer
      if(candidat.access ==  false){
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
      candidat.is_active=true
      await candidat.save();
      // Envoyer une réponse avec le token JWT
      return res.status(200).json({ token: token ,data:candidat, message :"Candidat Connecté"});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
  });
  



  // Route pour la connexion d'un candidat
router.post('/disconnect_candidat/:id/',AuthorizationMiddleware, async (req, res) => {
  try {
    const  candidatId =  req.params.id;
    // Vérifier si le candidat existe dans la base de données
    const candidat = await CandidatModel.findById({ _id: candidatId });
    if (!candidat) {
      return res.status(400).json({ message: 'Déconnexion impossible ....' });
    }
    candidat.token="";
    candidat.is_active=false
    await candidat.save();
    // Envoyer une réponse avec le token JWT
    return res.status(200).json({message:"Candidat déconnecté", data:candidat});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
  }
});




  module.exports =  router ;