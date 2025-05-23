const mongoose = require('mongoose')
const { secteursActivites } = require('../utils/FormatApi')


// Schéma pour les offres d'emploi
const offreEmploiSchema = new mongoose.Schema(
  {
    idEntreprise:{type:String, required:false},
    company :{type:String,required:false},
    title: { type: String, required: false },
    email: { type: String, required: false },
    telephone: { type: String, required: false },
    salaire: { type: String, required: false },
    coverPicture: { type: String, required: false },
    competences: [{type:Object }],
    areaOffre: { type: String, required: false },
    expireDispobility: { type: String, required: false },
    typeContrat: { type: String, required: false },
    addresse: { type: String, required: false },
    description: { type: String, required: false },
    salaire: { type: String, required: false },
    access: { type: Boolean, required: false,default:true },
    candidats : [{type:String}]
  },
  { timestamps: true }
)

// Modèle pour les offres d'emploi
const OffreEmploi = mongoose.model('OffreEmploi', offreEmploiSchema)

module.exports = OffreEmploi
