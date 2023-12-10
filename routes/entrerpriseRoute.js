const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const AnnonceModel = require("../models/AnnonceModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const OffreEmploi = require("../models/OffreEmploiModel");
const sendEmail = require("../utils/emailSender");


function generateRandomPasswordE(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}





// Fonction pour Ajouter une entreprise à l'appliction
router.post("/", AuthorizationMiddleware, async (req, res) => {
  try {
    const { username, email_entreprise, telephone } = req.body;
    // Vérifier si l'email existe déjà
    const entrepriseExist = await EntrepriseModel.findOne({ email_entreprise, username, telephone });
    if (entrepriseExist) {
      return res.status(400).json({ message: 'Cet Recruteur existe déjà !' });
    }

    // Générer un mot de passe aléatoire
    const passwordRandom = generateRandomPasswordE(10);
    const hashedPassword = await bcrypt.hash(passwordRandom, 10);

    // Créer un nouvel administrateur
    const newEntreprise = new EntrepriseModel(req.body);
    newEntreprise.password = hashedPassword;

    newEntreprise.is_active = true;
    await newEntreprise.save();
    sendEmail(
      "aymarbly559@gmail.com",
      "a g c t x y x c o x s k v a g k",
      `${newEntreprise.email}`,
      "Bienvenue sur Jouman",
      `Votre mot de passe : ${passwordRandom}`
    );

    // Renvoyer une réponse JSON
    return res.status(200).json({ message: 'Inscription du Recruteur réussie' });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse avec le message d'erreur correspondant
    console.error(error); // Ajoutez ceci pour voir l'erreur dans la console
    return res.status(500).json({ message: 'Impossible de créer le compte du Recruteur '+error });
  }
});








// Fonction pour modifier une candidat
router.put('/edit/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    delete updates.password;

    const entrepriseExist = await EntrepriseModel.findById({ _id: id });
    if (!entrepriseExist) {
      return res.status(408).json({ message: "Recruteur non trouvé mon trouvé" });
    }
    const result = await EntrepriseModel.findByIdAndUpdate({ _id: id }, updates);

    await result.save();
    return res.json({ message: "Recruteur modifier", data: result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});








// Fonction pour modifier le mot de passe de entreprise 
router.put("/password/edit/:id", AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const password = req.body.password;

    const entrepriseExist = await EntrepriseModel.findById({ _id: id });
    if (!entrepriseExist) {
      return res.status(404).json({ message: "Recruteur non trouvé mon trouvé" });
    }
    const result = await EntrepriseModel.findById({ _id: id });
    const hashPassword = await bcrypt.hash(password, 10);
    result.password = hashPassword

    await result.save();
    return res.json({ message: "Mot de passe mis à jour", data: result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'entreprise" }); // Réponse avec un message d'erreur en cas d'échec de la création de l'entreprise
  }
});






// Fonction pour reucupéere les comptes entreprise
router.get('/get_entreprises', AuthorizationMiddleware, async (req, res) => {
  try {
    const entreprises = await EntrepriseModel.find({});
    await res.json({ data: entreprises.reverse() });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});







router.get('/get_entreprise/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const entreprises = await EntrepriseModel.findById({ _id: id });
    await res.json({ data: entreprises });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});





// Fonction pour Bloquer les comptes des entreprise
router.put('/blocked/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const entreprises = await EntrepriseModel.findById({ _id: id });
    if (!entreprises) {
      await res.status(401).json({ message: "Cette entreprise n,'existe pas " })
    }
    entreprises.access = false;
    await entreprises.save();
    await res.json({ data: entreprises });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});








// Fonction pour Débloquer le compte d'une entreprise
router.put('/unblocked/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const entreprises = await EntrepriseModel.findById({ _id: id });
    if (!entreprises) {
      await res.status(401).json({ message: "Cette entreprise n,'existe pas " })
    }
    entreprises.access = true;
    await entreprises.save();
    await res.json({ data: entreprises });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});





// GESTION DES ANNONCES 
// Fonction pour qu'une entreprise poste une annonce





module.exports = router;