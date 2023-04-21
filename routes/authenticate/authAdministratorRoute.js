const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AdminModel = required("../models/AdminitratorModel.js");
const router = require("express").Router();





// Fonction pour connecter un administrateur
router.post("/auth_adminstrator", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Vérifier si l'email existe
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: 'Les informations d\'identification sont incorrectes' });
        }
        // Vérifier si le mot de passe est correct
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Les informations d\'identification sont incorrectes' });
        }
        // Générer un jeton d'authentification
        const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
        // Stocker le jeton dans un cookie HTTP-only sécurisé
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
        // Renvoyer une réponse JSON avec le jeton
        res.json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la connexion de l\'administrateur' });
    }
}
);