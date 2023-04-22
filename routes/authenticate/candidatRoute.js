

const CandidatModel = require('../../models/CandidatModel');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const  dotenv =  require("dotenv");
const jwt=  require("jsonwebtoken");
dotenv.config();





// Route pour la connexion d'un candidat
router.post('/login', async (req, res) => {
    try {
      // Vérifier si le candidat existe dans la base de données
      const candidat = await CandidatModel.findOne({ email: req.body.email });
      if (!candidat) {
        return res.status(401).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
      }
      // Vérifier si le mot de passe est correct
      const isValidPassword = await bcrypt.compare(req.body.password, candidat.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Adresse e-mail ou mot de passe incorrect.' });
      }
  
      // Générer un token JWT pour la session de connexion
      const token = jwt.sign({ id: candidat._id }, process.env.JWT_SECRET);
  
      // Envoyer une réponse avec le token JWT
      return res.status(200).json({ token: token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
  });
  