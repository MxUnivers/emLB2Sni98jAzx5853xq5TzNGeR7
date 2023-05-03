const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const bcrypt = require('bcryptjs');
const AdminModel = require("../../models/AdministratorModel");
const { AuthorizationMiddleware } = require('../../middlewares/Authtoken');
const router = require("express").Router();
dotenv.config();




// Fonction pour connecter un administrateur
router.post("/auth_adminstrator", AuthorizationMiddleware, async (req, res) => {
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
        admin.token = token;
        admin.is_active = true
        await admin.save();
        // Stocker le jeton dans un cookie HTTP-only sécurisé
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
        // Renvoyer une réponse JSON avec le jeton
        res.json({ message: 'Connexion réussie', token: token, data: admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la connexion de l\'administrateur' });
    }
}
);



//disconnect_administrator
router.post("/disconnect_administrator/id", AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        // Vérifier si l'email existe
        const admin = await AdminModel.findById({ _id: id });
        if (!admin) {
            return res.status(400).json({ error: 'Les informations d\'identification sont incorrectes' });
        }
        admin.is_active = false;
        await admin.save();
        res.json({ message: "Déconnexion de l'administrateur réussie", data: admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la déconnexion de l\'administrateur' });
    }
  }
);


module.exports = router;


