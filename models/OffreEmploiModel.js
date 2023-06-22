const mongoose = require('mongoose')
const { secteursActivites } = require('../utils/FormatApi')


// Schéma pour les offres d'emploi
const offreEmploiSchema = new mongoose.Schema(
  {
    titre: { type: String, required: false },
    entreprise: { type: String, required: false },
    idEntreprise: { type: String, required: false },
    description: { type: String, required: false },
    lieu: { type: String, required: false },
    logo: { type: String, required: false, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQow8AkuhZ9if3JUQJSEbT9hlhVldNECSBNiQ&usqp=CAU" },
    description: { type: String, required: false },
    lieu: { type: String, required: false },
    typeOffre: {
      type: String, required: false
    },
    dateDebut: { type: Date, default: Date.now, required: false },
    dateFin: { type: Date, default: Date.now, required: false },
    type: { type: String, default: "annonce" },
    typeContrat: {
      type: String,
      enum: ['CDI', 'CDD', 'STAGE', 'ALTERNANCE'],
      required: false,
    },
    secteur_activites: {
      type: String,
      required: false,
    },
    salaire: { type: Number },
    competences: [String],
    blocked: { type: Boolean, default: false },
    candidatPostulees: [
      { type: Object }
    ],
    noticationsEnvoyes: [
      { type: Object }
    ],
    candidatAdmis: [
      { type: Object }
    ]
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
