const mongoose = require('mongoose')


// Schéma pour les offres d'emploi
const offreEmploiSchema = new mongoose.Schema(
  {
    titre: { type: String, required: false },
    entreprise: { type: String, required: false },
    description: { type: String, required: false },
    lieu: { type: String, required: false },
    logo: { type: String, required: false },
    description: { type: String, required: false },
    lieu: { type: String, required: false },
    dateDebut: { type: Date, default: Date.now, required: false },
    dateFin: { type: Date, default: Date.now, required: false },
    typeContrat: {
      type: String,
      enum: ['CDI', 'CDD', 'STAGE', 'ALTERNANCE'],
      required: false,
      default: "CDD"
    },
    salaire: { type: Number },
    competences: [String],
    blocked: { type: Boolean, default: false },
    candidatPostulees: [
      { type: Object }
    ],
    noticationsEnvoyes: [
      { type: Object }
    ]
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
