const mongoose = require('mongoose');
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
    email:{
        type:String,required:false
    },
    telephone:{
        type:String,required:false
    },
    typeContrat: {
        type: String,
        enum: ['CDI', 'CDD', 'STAGE', 'ALTERNANCE'],
        required: false,
        default:"CDD"
    },
    lieu: {
        type: String,
        required: false,
        default:"Abidjan"
    },
    salaire: {
        type: Number,
        required: false,
        default:0
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
