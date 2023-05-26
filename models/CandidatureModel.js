const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
    idAnnonce: { type: String },
    idCandidat:{ type:String},
    idEntreprise:{ type:String},
    typeCandidature:{ type:String, default:"annonce"},
    titre:{ type:String},
    type:{ type:String, default:"annonce"},
    lettreMotivation: { type: String, required: false,},
    cv: { type: String, required: false,},
    date: { type: Date, default: Date.now,},
    status: { type: String, enum: ['En attente', 'Acceptée', 'Refusée'],default: 'En attente',},
}, 
{ timestamps: true }
);

const CandidatureModel = mongoose.model('Candidature', candidatureSchema);

module.exports = CandidatureModel;
