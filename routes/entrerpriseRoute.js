const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const AnnonceModel = require("../models/AnnonceModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const router = require("express").Router();
const bcrypt = require("bcryptjs")



// Fonction pour Ajouter une entreprise à l'appliction
router.post("/", AuthorizationMiddleware, async (req, res) => {
  try {
    const { email, password } = req.body;
    const entreprise = await EntrepriseModel.findOne({ email });
    if (entreprise) {
      res.status(400).json({ message: "Cet email à déja étéuliser" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newEntreprise = new EntrepriseModel(req.body);
    newEntreprise.password= hashPassword;
    await newEntreprise.save();
    return res.json({ message: "Compte entreprise créer avec succès ", data: newEntreprise });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'entreprise" }); // Réponse avec un message d'erreur en cas d'échec de la création de l'entreprise
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
      return res.status(404).json({ message: "Entreprise non trouvé mon trouvé" });
    }
    const result = await EntrepriseModel.findByIdAndUpdate({ _id: id }, updates);

    await result.save();
    return res.json({ message: "Entreprise modifier", data: result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});






// Fonction pour modifier le mot de passe de entreprise 
router.put("/password/edit/:id", AuthorizationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const password =req.body.password;

    const entrepriseExist = await EntrepriseModel.findById({ _id: id });
    if (!entrepriseExist) {
      return res.status(404).json({ message: "Entreprise non trouvé mon trouvé" });
    }
    const result = await EntrepriseModel.findById({ _id: id });
    const hashPassword = await bcrypt.hash(password, 10);
    result.password= hashPassword

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
    await res.json({ data: entreprises });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});


router.get('/get_entreprise/:id', AuthorizationMiddleware, async (req, res) => {
  try {
    const  id  =  req.params.id;
    const entreprises = await EntrepriseModel.findById({_id:id});
    await res.json({ data: entreprises });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});


// poster l'annonces d'une entreprise
router.post('/post_entreprise/:id/annonces', AuthorizationMiddleware, async (req, res) => {
  try {
    const  id  =  req.params.id;
    const entrepriseExit = await EntrepriseModel.findById({_id:id});
    if(!entrepriseExit){
      res.status(407).json({message:"entreprise non trouvé"});
    }
    const newAnnonce = new AnnonceModel(req.body);
    const entreprise = await EntrepriseModel.findByIdAndUpdate({_id:id},{$push:{annonces:newAnnonce}})
    await newAnnonce.save();
    await entreprise.save();

    await res.json({ data: entreprise });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});




// recupérer toute lesannonces d'une entreprise
router.get('/get_entreprise/:id/annonces', AuthorizationMiddleware, async (req, res) => {
  try {
    const  id  =  req.params.id;
    const entrepriseExit = await EntrepriseModel.findById({_id:id});
    if(!entrepriseExit){
      res.status(407).json({message:"entreprise non trouvé"});
    }
    const entreprise = await EntrepriseModel.findById({_id:id})
    await res.json({ data: entreprise.annonces });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});



// recupérer toute lesannonces d'une entreprise
router.get('/get_entreprise/:id/offres', AuthorizationMiddleware, async (req, res) => {
  try {
    const  id  =  req.params.id;
    const entrepriseExit = await EntrepriseModel.findById({_id:id});
    if(!entrepriseExit){
      res.status(407).json({message:"entreprise non trouvé"});
    }
    const entreprise = await EntrepriseModel.findById({_id:id})
    await res.json({ data: entreprise.offres });
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
    entreprises.blocked = true;
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
    entreprises.blocked = false;
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