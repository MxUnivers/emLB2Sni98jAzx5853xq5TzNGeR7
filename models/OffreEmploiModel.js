const mongoose = require('mongoose')
const { secteursActivites } = require('../utils/FormatApi')


// Schéma pour les offres d'emploi
const offreEmploiSchema = new mongoose.Schema(
  {
    idEntreprise:{type:String, required:false},
    title: { type: String, required: false },
    email: { type: String, required: false },
    coverPicture: { type: String, required: false },
    title_post: { type: String, required: false },
    areaOffre: { type: String, required: false },
    dispobility: { type: String, required: false },
    description: { type: String, required: false },
    salaire: { type: String, required: false },
    access: { type: Boolean, required: true },
    candidats : [{type:Object}]
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
