const mongoose = require('mongoose');

const CandidatureSchema = new mongoose.Schema({

    idOffre: { type: String },
    idCandidat:{ type:String},
    idEntreprise:{ type:String},
    coverPicture:{type:String,require:false},
    title:{type:String,require:false},
    logo:{type:String,require:false},
    firstname: { type: String, required: false,},
    lastname: { type: String, required: false,},
    email: { type: String, required: false,},
    telephone: { type: String, required: false,},
    description: { type: String, required: false,},
    cv: { type: String, required: false,},
    status: { type: String, enum: ['PENDING', 'VALIDATE', 'CANCEL'],default: 'PENDING',},
}, 
{ timestamps: true ,}
);

const CandidatureModel = mongoose.model('Candidature', CandidatureSchema);

module.exports = CandidatureModel;
