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
    titre: { type: String, required: false },
    entreprise: { type: String, required: false },
    description: { type: String, required: false },
    lieu: { type: String, required: false },
    logo: { type: String, required: false },
    dateDebut: { type: Date,default:Date.now, required: false },
    dateFin: { type: Date,default:Date.now, required: false },
    salaire: { type: Number },
    candidats: [candidatSchema],
    competences:[String],
    blocked: { type: Boolean, default: false },
    candidatPostulees:[
      {type:Object}
    ]
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
