const mongoose = require("mongoose");

const EntrepriseSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telephone: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  logo: {
    type: String
  },
  password: {
    type: String,
    required: false
  },
  token: {
    type: String, required: false
  },
  annonces: [{
    annonceID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce"
    },
    status: {
      type: String,
      default: "actif"
    }
  }],
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
  is_active: {
    type: Boolean,
    default: false
  },
  blocked: {
    type: Boolean,
    default: false
  },
});

const EntrepriseModel = mongoose.model("Entreprise", EntrepriseSchema);

module.exports = EntrepriseModel;
