const AnnonceModel = require("../models/AnnonceModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const router  =  require("express").Router();



// Fonction pour Ajouter une entreprise à l'appliction

router.post("/entreprise", async (req, res) => {
    try {
      const { nom, email, telephone, adresse, description, logo } = req.body; // Récupération des données de l'entreprise depuis le corps de la requête
  
      const nouvelleEntreprise = new EntrepriseModel({ // Création d'une nouvelle instance du modèle Entreprise avec les données récupérées
        nom,
        email,
        telephone,
        adresse,
        description,
        logo,
        annonces: [], // Initialisation de la liste des annonces à vide
        comptePaiement: {
          solde: 0, // Initialisation du solde à zéro
          dateDernierPaiement: Date.now(), // Initialisation de la date du dernier paiement à la date actuelle
          moyenPaiement: "" // Initialisation du moyen de paiement à une chaîne vide
        }
      });
  
      const entreprise = await nouvelleEntreprise.save(); // Sauvegarde de l'entreprise dans la base de données
  
      res.json({ message: "Entreprise créée avec succès", entreprise }); // Réponse avec un message de succès et les détails de l'entreprise créée
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'entreprise" }); // Réponse avec un message d'erreur en cas d'échec de la création de l'entreprise
    }
  });




  // Fonction pour qu'une entreprise poste une annonce

  router.post('/:id/annonces', async (req, res) => {
    try {
      const { titre, description, lieu, dateDebut, dateFin, salaire } = req.body;
      const entrepriseId = req.params.id; // Récupère l'ID de l'entreprise à partir de l'objet utilisateur de la requête
      
      const entreprise = await EntrepriseModel.findById(entrepriseId); // Recherche l'entreprise dans la base de données
  
      const nouvelleAnnonce = new AnnonceModel({
        titre,
        description,
        lieu,
        dateDebut,
        dateFin,
        salaire,
        entreprise: entreprise._id // Enregistre l'ID de l'entreprise dans l'annonce créée
      });
  
      entreprise.annonces.push({
        annonceID: nouvelleAnnonce._id, // Enregistre l'ID de l'annonce créée dans la liste d'annonces de l'entreprise
        status: "active" // Initialise le statut de l'annonce comme active
      });
  
      await nouvelleAnnonce.save(); // Enregistre l'annonce créée dans la base de données
      await entreprise.save(); // Met à jour l'entreprise dans la base de données
  
      res.status(201).json({ message: "Annonce créée avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'annonce" });
    }
  });
  



  //Foncation pour modifier l"annonces de l'entrerpise
  router.put('/annonces/:id', async (req, res) => {
    try {
      const annonce = await AnnonceModel.findById(req.params.id); // Trouver l'annonce à modifier
  
      if (!annonce) { // Vérifier si l'annonce existe
        return res.status(404).json({ message: "L'annonce n'existe pas" });
      }
  
      if (annonce.entreprise.toString() !== req.user.id) { // Vérifier si l'utilisateur est le propriétaire de l'annonce
        return res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier cette annonce" });
      }
  
      annonce.titre = req.body.titre || annonce.titre;
      annonce.description = req.body.description || annonce.description;
      annonce.lieu = req.body.lieu || annonce.lieu;
      annonce.dateDebut = req.body.dateDebut || annonce.dateDebut;
      annonce.dateFin = req.body.dateFin || annonce.dateFin;
      annonce.salaire = req.body.salaire || annonce.salaire;
  
      const annonceModifiee = await annonce.save(); // Enregistrer les modifications de l'annonce
  
      res.json({ message: "Annonce modifiée avec succès", annonce: annonceModifiee });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la modification de l'annonce" });
    }
  });
  