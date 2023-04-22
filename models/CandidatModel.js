const mongoose = require('mongoose')

const CandidatSchema = new mongoose.Schema({
    firstname: {
        type: String, required: true
    },
    lastname: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    telephone: {
        type: String, required: true
    },
    adresse: {
        type: String, required: true
    },
    ville: {
        type: String, required: true
    },
    pays: {
        type: String, required: true
    },
    level_school: {
        type: String, required: true
    },
    years_experience: {
        type: Number, required: true
    },
    competences: {
        type: [String], required: true
    },
    langues: {
        type: [String], required: true
    },
    cv: {
        type: String
    },
    lettre_motivation: {
        type: String
    },
    token:{
        type:String,required:false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    date_creation: {
        type: Date, default: Date.now
    },
    date_mise_a_jour: {
        type: Date, default: Date.now
    },

    
},{
    timestamps:true
})

const CandidatModel = mongoose.model('Candidat', CandidatSchema)

module.exports = CandidatModel;
