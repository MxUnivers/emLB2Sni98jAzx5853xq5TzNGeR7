const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { secteursActivites, statusPACKS } = require("../utils/FormatApi");

const EntrepriseSchema = new mongoose.Schema({
  username: {
    type: String,
    require: false,
    unique: true
  },
  full_name: {
    type: String,
    required: false
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  title_post: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique:true
  },
  employers_count: {
    type: String, require: false
  },
  dateNaissance: {
    type: String, require: false
  },
  dateNaissance_entreprise: {
    type: String, require: false
  },
  telephone: {
    type: String,
    required: false
  },
  telephone_entreprise: {//ok
    type: String,
    required: false
  },
  adresse: {
    type: String,
    required: false
  },
  description_entreprise: {//ok
    type: String
  },
  logo: { //ok
    type: String
  },
  pays_entreprise: {//ok
    type: String,
  },
  addresse_entreprise: {
    type: String
  },
  salaire_capital: {//of
    type: String,
    required: false
  },
  typeStatut: { type: String, default: "STARTER", enum: ["PREMIUM", "NORMAL", "STARTER"] },
  comptePaiement: {
    solde: {
      type: Number,
      default: 0
    },
    dateDernierPaiement: {
      type: Date,
      default: null
    },
    moyenPaiement: {
      type: String
    }
  },
  maps: {
    type: String, default: false
  },
  maps_entreprise: {
    type: String, default: false, default: "#"
  },
  offres: [
    { type: Object }
  ],
  secteur_activites: [{ type: Object }],
  langues: [{ type: Object }],
  site_web: {
    type: String, default: "#", require: false
  },
  facebook_url: {
    type: String, default: "#", require: false
  },
  twitter_url: {
    type: String, default: "#", require: false
  },
  linkedin_url: {
    type: String, default: "#", require: false
  },
  instagram_url: {
    type: String, default: "#", require: false
  },

  password: {
    type: String,
    required: false
  },


  // packs pour les entreprise
  account: {
    solde: { type: Number, default: 0 },
    pack: { type: String, default: statusPACKS[0] },
    dateNow: { type: String, default: Date.now },
    dateEnd: { type: String },
    count_sms: { type: Number, default: 0 }
  },
  token: {
    type: String, required: false
  },
  is_active: {
    type: Boolean,
    default: false
  },
  access: {
    type: Boolean,
    default: true
  },
});

const EntrepriseModel = mongoose.model("entreprise", EntrepriseSchema);



const listAdminList = [
  {
    "username": "utilisateur123",
    "full_name": "John Doe",
    "firstname": "John",
    "lastname": "Doe",
    "title_post": "Ingénieur logiciel",
    "email": "john.doe@email.com",
    "email_entreprise": "contact@entreprise.com",
    "employers_count": "50",
    "dateNaissance": "01/01/1980",
    "dateNaissance_entreprise": "01/01/1990",
    "telephone": "123-456-7890",
    "telephone_entreprise": "987-654-3210",
    "adresse": "123 Rue de la Rue",
    "description_entreprise": "Une entreprise innovante",
    "logo": "url_du_logo.jpg",
    "pays_entreprise": "France",
    "addresse_entreprise": "456 Avenue de l'Entreprise",
    "salaire_capital": "1000000",
    "typeStatut": "PREMIUM",
    "comptePaiement": {
      "solde": 5000,
      "dateDernierPaiement": "2023-09-15",
      "moyenPaiement": "Carte de crédit"
    },
    "maps": "url_de_la_carte",
    "maps_entreprise": "url_de_la_carte_entreprise",
    "offres": [],
    "secteur_activites": [
      { label: "Technologie de l'information", value: "technologie_information" },
      { label: "Développement informatique", value: "developpement_informatique" },
    ],
    "langues": [
      { label: "Technologie de l'information", value: "technologie_information" },
      { label: "Développement informatique", value: "developpement_informatique" },
    ],
    "site_web": "https://www.monentreprise.com",
    "facebook_url": "https://www.facebook.com/monentreprise",
    "twitter_url": "https://www.twitter.com/monentreprise",
    "linkedin_url": "https://www.linkedin.com/monentreprise",
    "instagram_url": "https://www.instagram.com/monentreprise",
    "password": "motdepasse123",
    "token": "jeton_d'authentification",
    "is_active": true,
    "access": true
  }
]




// Fonction pour créer un nouvel administrateur par default
// const createAdminDefault = async (itemAmdin) => {
//   const newadmin = new EntrepriseModel(itemAmdin);
//   const hashedPassword = await bcrypt.hash(itemAmdin.password, 10);
//   newadmin.password = hashedPassword;
//   await newadmin.save()
//     .then((savedAdmin) => {
//       console.log('Nouvelle Entrperise créer avec succès.');
//     })
//     .catch((error) => {
//       console.log("Impossible de créer Entreprise : ");
//     });
// }

// create administrateur
// for (var item of listAdminList) {
//   createAdminDefault(item);
// }








module.exports = EntrepriseModel;
