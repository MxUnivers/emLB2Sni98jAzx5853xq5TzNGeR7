const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    entreprise: {
        type: String,
        required: true
    },
    typeContrat: {
        type: String,
        enum: ['CDI', 'CDD', 'Stage', 'Alternance'],
        required: true
    },
    lieu: {
        type: String,
        required: true
    },
    salaire: {
        type: Number,
        required: true
    },
    dateDebut:{
        type:Date,
        default:Date.now,
    },
    dateFin:{
        type:Date,
        default:Date.now,
    },
    candidats: [{
        type: Schema.Types.ObjectId,
        ref: 'Candidat',
    }],
    blocked:{
        type:Boolean,
        required:false,
        default:false
    }
});

const AnnonceModel = mongoose.model('Annonce', annonceSchema);

module.exports = AnnonceModel;
