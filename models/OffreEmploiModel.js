const mongoose = require('mongoose')

// Schéma pour les candidats
const candidatSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String },
  cv: { type: String }
})

// Schéma pour les offres d'emploi
const offreEmploiSchema = new mongoose.Schema(
  {
    titre: { type: String, required: true },
    entreprise: { type: String, required: true },
    description: { type: String, required: true },
    lieu: { type: String, required: true },
    dateDebut: { type: Date,default:Date.now, required: true },
    dateFin: { type: Date,default:Date.now, required: true },
    salaire: { type: Number },
    candidats: [candidatSchema],
    competences:[String],
    blocked: { type: Boolean, default: false }
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
