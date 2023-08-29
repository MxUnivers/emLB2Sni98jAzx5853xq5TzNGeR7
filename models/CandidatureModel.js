const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
    idAnnonce: { type: String },
    idCandidat:{ type:String},
    idEntreprise:{ type:String},
    firstname: { type: String, required: false,},
    lastname: { type: String, required: false,},
    email: { type: String, required: false,},
    telephone: { type: String, required: false,},
    description: { type: String, required: false,},
    cv: { type: String, required: false,},
    status: { type: String, enum: ['PENDING', 'VALIDATE', 'CANCEL'],default: 'PENDING',},
}, 
{ timestamps: true }
);

const CandidatureModel = mongoose.model('Candidature', candidatureSchema);

module.exports = CandidatureModel;
