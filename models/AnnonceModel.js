const mongoose = require('mongoose');
const { secteursActivites } = require('../utils/FormatApi');
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    titre: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    entreprise: {
        type: String,
        required: false
    },
    email: {
        type: String, required: false
    },
    telephone: {
        type: String, required: false
    },
    
    lieu: {
        type: String,
        required: false,
        default: "Abidjan"
    },
    salaire: {
        type: Number,
        required: false,
        default: 0
    },
    dateDebut: {
        type: Date,
        default: Date.now,
    },
    dateFin: {
        type: Date,
        default: Date.now,
    },
    candidats: [{
        type: Schema.Types.ObjectId,
        ref: 'Candidat',
    }],
    secteur_activites: {
        type: String,
        enum: secteursActivites,
        required: false,
      },
    blocked: {
        type: Boolean,
        required: false,
        default: false
    },
    candidatAdmis:[
        { type: Object }
      ]
});

const AnnonceModel = mongoose.model('Annonce', annonceSchema);

module.exports = AnnonceModel;
